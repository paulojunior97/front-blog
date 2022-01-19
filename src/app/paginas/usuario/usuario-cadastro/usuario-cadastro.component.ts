import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UsuarioService} from '../../../service/usuario.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.scss']
})
export class UsuarioCadastroComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    nome: new FormControl(),
    email: new FormControl(),
    senha: new FormControl(),
    perfil: new FormControl()
  });

  constructor(
    private usuarioService: UsuarioService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
  }

  cadastrar() {
    this.usuarioService.cadastrarUsuario(this.formGroup.getRawValue()).subscribe(response => {
      this.snackBar.open(
        'Usuário cadastrado com sucesso.',
        'Cadastro',
        {duration: 2500, direction: 'ltr', verticalPosition: 'top'}
      );
      this.router.navigate(['usuarios']);
    });
  }
}
