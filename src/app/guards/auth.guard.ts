import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {JwtService} from '../service/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private jwtService: JwtService,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    if (this.jwtService.isToken()) {
      if (this.jwtService.tokenExpired()) {
        this.router.navigate(['login']);
        return false;
      }

      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
