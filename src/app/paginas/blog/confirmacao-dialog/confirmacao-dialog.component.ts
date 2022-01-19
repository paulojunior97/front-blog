import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export interface DadosConfirmacao {
  titulo: string;
  descricao: string;
}

@Component({
  selector: 'app-confirmacao-dialog',
  templateUrl: './confirmacao-dialog.component.html',
  styleUrls: ['./confirmacao-dialog.component.scss']
})
export class ConfirmacaoDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmacaoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DadosConfirmacao
  ) { }

  cancelar() {
    this.dialogRef.close();
  }

  confirmar() {
    this.dialogRef.close(true);
  }

}
