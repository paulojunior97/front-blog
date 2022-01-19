export interface UsuarioModel {
  id?: number;
  nome: string;
  email: string;
  perfil: PerfilEnum;
}

export interface UsuarioCreate {
  nome: string;
  senha: string;
  email: string;
  perfil: string;
}

export enum PerfilEnum {
  ADMIN = 'ADMIN',
  CLIENTE = 'CLIENTE'
}
