import {BaseService} from './base.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AlbumModel} from '../model/album.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumService extends BaseService {

  private relativeUrl = 'albuns';
  constructor(
    private httpClient: HttpClient
  ) {
    super();
  }

  cadastrarAlbum(album: AlbumModel): Observable<any> {
    return this.httpClient.post(this.getUrl(this.relativeUrl), album).pipe(map((result: any) => {
      return result;
    }));
  }

  removerAlbum(albumId: number): Observable<any> {
    return this.httpClient.delete(`${this.getUrl(this.relativeUrl)}/${albumId}`).pipe(map((result: any) => {
      return result;
    }));
  }
}
