import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from '../../service/login.service';
import {JwtService} from '../../service/jwt.service';
import {Router} from '@angular/router';
import {PerfilEnum} from '../../model/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    email: new FormControl(),
    senha: new FormControl()
  });

  constructor(
    private loginService: LoginService,
    private jwtService: JwtService,
    private router: Router
  ) { }

  ngOnInit() {
    this.jwtService.destroyToken();
  }

  logar() {
    this.loginService.getToken(this.formGroup.getRawValue()).subscribe(response => {
      this.jwtService.saveToken(response.jwttoken);
      if (this.jwtService.getPerfil() === PerfilEnum.ADMIN) {
        this.router.navigate(['usuarios']);
      } else {
        this.router.navigate(['blog', 'feed-noticias']);
      }
    });
  }

}
