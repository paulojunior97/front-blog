import {BaseService} from './base.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {JwtTokenModel, LoginModel} from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  private relativeUrl = 'authenticate';
  constructor(
    private httpClient: HttpClient
  ) {
    super();
  }

  getToken(login: LoginModel): Observable<JwtTokenModel> {
    return this.httpClient.post(this.getUrl(this.relativeUrl), login).pipe(map((result: JwtTokenModel) => {
      return result;
    }));
  }

}
