import {Component, OnInit} from '@angular/core';
import {JwtService} from '../../service/jwt.service';
import {PerfilEnum} from '../../model/usuario.model';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  acoes: any[] = [];

  constructor(
    private jwtService: JwtService,
    private router: Router
  ) {
  }

  get nomeUsuarioLogado() {
    return this.jwtService.getNomeUsuario();
  }

  ngOnInit() {
    if (this.jwtService.getPerfil() === PerfilEnum.ADMIN) {
      this.acoes = environment.header.acoesHeaderAdmin;
    } else {
      this.acoes = environment.header.acoesHeaderCliente;
    }
  }

  clickAction(rota: string[]) {
    this.router.navigate(rota);
  }

  sairSistema() {
    this.router.navigate(['login']);
  }

}
