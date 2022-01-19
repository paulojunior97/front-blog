import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UsuarioModel} from '../../../model/usuario.model';

@Component({
  selector: 'app-usuario-confirmacao-dialog',
  templateUrl: './usuario-confirmacao-dialog.component.html',
  styleUrls: ['./usuario-confirmacao-dialog.component.scss']
})
export class UsuarioConfirmacaoDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<UsuarioConfirmacaoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UsuarioModel
  ) { }

  cancelar() {
    this.dialogRef.close();
  }

  confirmar() {
    this.dialogRef.close(this.data);
  }
}
