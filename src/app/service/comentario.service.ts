import {BaseService} from './base.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ComentarioCreate} from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService extends BaseService {

  private relativeUrl = 'comentarios';
  constructor(
    private httpClient: HttpClient
  ) {
    super();
  }

  addComentario(comentario: ComentarioCreate): Observable<any> {
    return this.httpClient.post(this.getUrl(this.relativeUrl), comentario).pipe(map((result: any) => {
      return result;
    }));
  }

  removerComentario(comentarioId: number): Observable<any> {
    return this.httpClient.delete(`${this.getUrl(this.relativeUrl)}/${comentarioId}`).pipe(map((result: any) => {
      return result;
    }));
  }
}
