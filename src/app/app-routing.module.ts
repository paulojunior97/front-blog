import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './paginas/login/login.component';
import {BaseComponent} from './estrutura/base/base.component';
import {AuthGuard} from './guards/auth.guard';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'blog',
        loadChildren: './paginas/blog/blog.module#BlogModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'usuarios',
        loadChildren: './paginas/usuario/usuario.module#UsuarioModule',
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
