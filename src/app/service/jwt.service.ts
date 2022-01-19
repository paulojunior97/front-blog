import {Injectable} from '@angular/core';
import {LocalStorage} from '../utils/local.storage';
import jwt_decode from 'jwt-decode';
import {PerfilEnum} from '../model/usuario.model';

const JWT_TOKEN = 'jwtToken';
const JWT_TOKEN_PERFIL = 'perfil';
const JWT_TOKEN_NOME = 'nome';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  isToken(): boolean {
    return LocalStorage.hasItem(JWT_TOKEN);
  }

  getToken(): string {
    return LocalStorage.getItem(JWT_TOKEN);
  }

  getPerfil(): PerfilEnum {
    const tokenDecode = this.getDecodedToken();
    return tokenDecode[JWT_TOKEN_PERFIL];
  }

  getNomeUsuario(): string {
    const tokenDecode = this.getDecodedToken();
    return tokenDecode[JWT_TOKEN_NOME];
  }

  getDecodedToken(): any {
    return jwt_decode(LocalStorage.getItem(JWT_TOKEN));
  }

  saveToken(token: string): void {
    return LocalStorage.setItem(JWT_TOKEN, token);
  }

  tokenExpired(): boolean {
    if (!this.isToken()) {
      return true;
    }
    const expiry = this.getDecodedToken().exp;
    return (Math.floor((new Date()).getTime() / 1000)) >= expiry;
  }

  destroyToken(): void {
    LocalStorage.removeItem(JWT_TOKEN);
  }
}
