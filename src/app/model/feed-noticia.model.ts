import {UsuarioModel} from './usuario.model';
import {ComentarioModel} from './post.model';

export interface FeedNoticiaModel {
  id: number;
  titulo: string;
  descricao: string;
  dataPublicacao: number;
  links: Array<{
    url: string;
    descricao: string;
  }>;
  imagensBase64: Array<string>;
  criador: UsuarioModel;
  comentarios: Array<ComentarioModel>;
}
