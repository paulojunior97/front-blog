import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MatDialog, MatSnackBar, MatTableDataSource} from '@angular/material';
import {debounceTime} from 'rxjs/operators';
import {UsuarioService} from '../../../service/usuario.service';
import {UsuarioModel} from '../../../model/usuario.model';
import {UsuarioConfirmacaoDialogComponent} from '../usuario-confirmacao-dialog/usuario-confirmacao-dialog.component';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.scss']
})
export class UsuarioListaComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'email', 'acoes'];

  formGroup: FormGroup = new FormGroup({
    nome: new FormControl(),
    email: new FormControl()
  });

  dataSource = new MatTableDataSource([]);

  constructor(
    private usuarioService: UsuarioService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.filtrarUsuarios(this.formGroup.getRawValue());
    this.formGroup.valueChanges.pipe(debounceTime(700)).subscribe(value => {
      this.filtrarUsuarios(value);
    });
  }

  remover(usuario: UsuarioModel) {
    const dialogRef = this.dialog.open(UsuarioConfirmacaoDialogComponent, {
      width: '300px',
      data: usuario
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.usuarioService.removerUsuario(usuario.id).subscribe(() => {
          this.snackBar.open(
            'Usuário removido com sucesso.',
            'Exclusão',
            {duration: 2500, direction: 'ltr', verticalPosition: 'top'}
          );
          this.filtrarUsuarios(this.formGroup.getRawValue());
        });
      }
    });
  }

  private filtrarUsuarios(filtros?: any) {
    this.usuarioService.consultaUsuarios(filtros).subscribe(response => {
      this.dataSource.data = response;
      this.dataSource._updateChangeSubscription();
    });
  }

}
