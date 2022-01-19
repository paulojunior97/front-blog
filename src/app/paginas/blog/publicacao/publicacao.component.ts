import {Component, Input, OnInit} from '@angular/core';
import {FeedNoticiaModel} from '../../../model/feed-noticia.model';
import {FormControl} from '@angular/forms';
import {ComentarioService} from '../../../service/comentario.service';
import {ComentarioCreate} from '../../../model/post.model';
import {MatDialog, MatSnackBar} from '@angular/material';
import {PostService} from '../../../service/post.service';
import {AlbumService} from '../../../service/album.service';
import {UsuarioConfirmacaoDialogComponent} from '../../usuario/usuario-confirmacao-dialog/usuario-confirmacao-dialog.component';
import {ConfirmacaoDialogComponent, DadosConfirmacao} from '../confirmacao-dialog/confirmacao-dialog.component';

@Component({
  selector: 'app-publicacao',
  templateUrl: './publicacao.component.html',
  styleUrls: ['./publicacao.component.scss']
})
export class PublicacaoComponent implements OnInit {

  @Input()publicacao: FeedNoticiaModel;
  formControl: FormControl = new FormControl();

  constructor(
    private comentarioService: ComentarioService,
    private snackBar: MatSnackBar,
    private postService: PostService,
    private albumService: AlbumService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  removerPublicacao() {
    const mensagemSucesso = 'Publicação removida com sucesso.';
    const tituloMensagem = 'Exclusão';
    const data: DadosConfirmacao = {
      titulo: 'Remover publicação',
      descricao: 'Deseja remover a publicação ?'
    };
    const dialogRef = this.dialog.open(ConfirmacaoDialogComponent, {
      width: '300px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (this.publicacao.titulo === 'Post') {
          this.postService.removerPostagem(this.publicacao.id).subscribe(() => {
            this.snackBar.open(
              mensagemSucesso,
              tituloMensagem,
              {duration: 2500, direction: 'ltr', verticalPosition: 'top'}
            );
            document.location.reload(true);
          });
        } else {
          this.albumService.removerAlbum(this.publicacao.id).subscribe(() => {
            this.snackBar.open(
              mensagemSucesso,
              tituloMensagem,
              {duration: 2500, direction: 'ltr', verticalPosition: 'top'}
            );
            document.location.reload(true);
          });
        }
      }
    });
  }

  addComentario() {
    if (this.formControl.value) {
      const comentario: ComentarioCreate = {
        conteudo: this.formControl.value,
        idPost: this.publicacao.id
      };
      this.comentarioService.addComentario(comentario).subscribe(() => {
        this.snackBar.open(
          'Comentário adicionado com sucesso.',
          'Cadastro',
          {duration: 2500, direction: 'ltr', verticalPosition: 'top'}
        );
        document.location.reload(true);
      });
    }
  }

  removerComentario(comentarioId: number) {
    const data: DadosConfirmacao = {
      titulo: 'Remover comentário',
      descricao: 'Deseja remover o comentário ?'
    };
    const dialogRef = this.dialog.open(ConfirmacaoDialogComponent, {
      width: '300px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.comentarioService.removerComentario(comentarioId).subscribe(() => {
          this.snackBar.open(
            'Comentário removido com sucesso.',
            'Exclusão',
            {duration: 2500, direction: 'ltr', verticalPosition: 'top'}
          );
          document.location.reload(true);
        });
      }
    });
  }

}
