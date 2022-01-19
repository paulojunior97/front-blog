import {UsuarioModel} from './usuario.model';

export interface PostModel {
  conteudo: string;
  links: Array<{
    url: string;
    descricao;
  }>;
  imagensBase64: Array<string>;
}

export interface ComentarioModel {
  id: number;
  conteudo: string;
  idPost: number;
  data: number;
  autor: UsuarioModel;
}

export interface ComentarioCreate {
  conteudo: string;
  idPost: number;
}
