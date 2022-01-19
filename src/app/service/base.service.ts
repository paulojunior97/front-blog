import {Injectable} from '@angular/core';
import {throwError} from 'rxjs';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BaseService {
  // Error handling
  handleError(result) {
    return throwError(result.status);
  }

  getUrl(relativeUrl) {
    return `${environment.apiUrl}/${relativeUrl}`;
  }
}
