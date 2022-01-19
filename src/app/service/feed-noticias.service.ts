import {BaseService} from './base.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FeedNoticiaModel} from '../model/feed-noticia.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedNoticiasService extends BaseService {

  private relativeUrl = 'feed-noticias';
  constructor(
    private httpClient: HttpClient
  ) {
    super();
  }

  feedNoticias(): Observable<Array<FeedNoticiaModel>> {
    return this.httpClient.get(this.getUrl(this.relativeUrl)).pipe(map((result: Array<FeedNoticiaModel>) => {
      return result;
    }));
  }
}
