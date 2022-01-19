import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedNoticiasComponent } from './feed-noticias/feed-noticias.component';
import { PublicacaoComponent } from './publicacao/publicacao.component';
import {RouterModule, Routes} from '@angular/router';
import { BlogComponent } from './blog.component';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule, MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CadastroPostComponent } from './cadastro-post/cadastro-post.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UploadImagensComponent } from './upload-imagens/upload-imagens.component';
import { CadastroAlbumComponent } from './cadastro-album/cadastro-album.component';
import { ConfirmacaoDialogComponent } from './confirmacao-dialog/confirmacao-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: 'feed-noticias',
        component: FeedNoticiasComponent
      },
      {
        path: 'cadastro-post',
        component: CadastroPostComponent
      },
      {
        path: 'cadastro-album',
        component: CadastroAlbumComponent
      }
    ]
  }
];
@NgModule({
  declarations: [
    FeedNoticiasComponent,
    PublicacaoComponent,
    BlogComponent,
    CadastroPostComponent,
    UploadImagensComponent,
    CadastroAlbumComponent,
    ConfirmacaoDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatExpansionModule,
    MatDialogModule
  ],
  entryComponents: [
    ConfirmacaoDialogComponent
  ]
})
export class BlogModule { }
