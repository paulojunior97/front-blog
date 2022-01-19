import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {JwtService} from '../service/jwt.service';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';
import {ErrorModel} from '../model/error.model';
import {Router} from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    protected jwtService: JwtService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.jwtService.isToken()) {
      const token = this.jwtService.getToken();
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    } else {
      this.router.navigate(['login']);
    }
    return next.handle(req).pipe(catchError(this.hadleHttpError.bind(this)));
  }

  private hadleHttpError(response): Observable<never> {
    try {
      const requestFail = ((error) => {
        console.error('[ErrorInterceptor::serviceNotAvailable] Falhou o request!', error);
        return 'Serviço indisponível, tente novamente em alguns minutos.';
      });
      const badRequest = ((error) => {
        console.error('[ErrorInterceptor::badRequest] Erro negocial da API!', error);

        if (error instanceof Object) {
          if (error.error === 'invalid_grant') {
            return 'Credenciais inválidas.';
          }
          return (error.mensagem) ? error.mensagem : 'Erro de API: desconhecido';
        }
      });
      const unauthorized = ((error) => {
        console.error('[ErrorInterceptor::accessDennied] Sem autorização, sai fora do sistema!', error);
        return 'Sem autorização!';
      });
      const forbidden = ((error) => {
        console.error('[ErrorInterceptor::forbidden] Proibido!', error);
        return 'Você não tem permissão.';
      });
      const notFound = ((error) => {
        console.error('[ErrorInterceptor::notFound] Erro de não encontrado!', error);
        return 'Nenhum resultado encontrado.';
      });
      const internalServerError = ((error) => {
        console.error('[ErrorInterceptor::internalServerError] Erro interno no servidor!', error);

        return 'Erro interno no servidor!';
      });
      const errorMapping = {
        0: requestFail,
        400: badRequest,
        401: unauthorized,
        403: forbidden,
        404: notFound,
        500: internalServerError
      };
      if (response.status in errorMapping) {
        const errorModel: ErrorModel = {
          code: response.status,
          message: errorMapping[response.status](response.error),
          data: response
        };
        this.snackBar.open(
          `${errorModel.message} `,
          `HTTP - ${errorModel.code}`,
          {duration: 2500, direction: 'ltr', verticalPosition: 'top'}
        );
        if (errorModel.code === 401) {
          this.router.navigate(['login']);
        }
        return throwError(errorModel);
      }
    } catch (e) {
      console.error(e, response);
    }
    return throwError({message: ':( Ops! Algo inesperado aconteceu.', code: 0, data: response});
  }

}
