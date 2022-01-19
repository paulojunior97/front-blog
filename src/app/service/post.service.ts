import {BaseService} from './base.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostModel} from '../model/post.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService {

  private relativeUrl = 'posts';
  constructor(
    private httpClient: HttpClient
  ) {
    super();
  }

  cadastrarPostagem(post: PostModel): Observable<any> {
    return this.httpClient.post(this.getUrl(this.relativeUrl), post).pipe(map((result: any) => {
      return result;
    }));
  }

  removerPostagem(postId: number): Observable<any> {
    return this.httpClient.delete(`${this.getUrl(this.relativeUrl)}/${postId}`).pipe(map((result: any) => {
      return result;
    }));
  }
}
