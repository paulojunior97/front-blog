import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {
    MatButtonModule, MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatTooltipModule
} from '@angular/material';
import { UsuarioConfirmacaoDialogComponent } from './usuario-confirmacao-dialog/usuario-confirmacao-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioListaComponent
  },
  {
    path: 'cadastro',
    component: UsuarioCadastroComponent
  }
];

@NgModule({
  declarations: [UsuarioListaComponent, UsuarioCadastroComponent, UsuarioConfirmacaoDialogComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatTableModule,
        MatIconModule,
        MatTooltipModule,
        MatDialogModule
    ],
  entryComponents: [
    UsuarioConfirmacaoDialogComponent
  ]
})
export class UsuarioModule { }
