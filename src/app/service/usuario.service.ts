import {Observable} from 'rxjs';
import {UsuarioCreate, UsuarioModel} from '../model/usuario.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BaseService} from './base.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BaseService {

  private relativeUrl = 'usuarios';
  constructor(
    private httpClient: HttpClient
  ) {
    super();
  }

  consultaUsuarios(filtros: {nome?: string, email?: string}): Observable<Array<UsuarioModel>> {
    const params = {};
    for (const key of Object.keys(filtros)) {
      if (filtros[key]) {
        params[key] = filtros[key];
      }
    }
    return this.httpClient.get(this.getUrl(this.relativeUrl), {params: params}).pipe(map((result: Array<UsuarioModel>) => {
      return result;
    }));
  }

  cadastrarUsuario(usuario: UsuarioCreate): Observable<any> {
    return this.httpClient.post(this.getUrl(this.relativeUrl), usuario).pipe(map((result: any) => {
      return result;
    }));
  }

  removerUsuario(usuarioId: number): Observable<any> {
    return this.httpClient.delete(`${this.getUrl(this.relativeUrl)}/${usuarioId}`).pipe(map((result: any) => {
      return result;
    }));
  }

}
