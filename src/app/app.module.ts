import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './paginas/login/login.component';
import {
    _MatMenuDirectivesModule,
    MatCardModule, MatDialogModule, MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule, MatMenuModule,
    MatSnackBar,
    MatSnackBarModule,
    MatToolbarModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { BaseComponent } from './estrutura/base/base.component';
import { TopoComponent } from './estrutura/topo/topo.component';
import { ConteudoComponent } from './estrutura/conteudo/conteudo.component';
import {TokenInterceptor} from './interceptors/token.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtService} from './service/jwt.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BaseComponent,
    TopoComponent,
    ConteudoComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        HttpClientModule,
        MatSnackBarModule,
        MatDialogModule,
        _MatMenuDirectivesModule,
        MatMenuModule,
        MatDividerModule
    ],
  providers: [
    TokenInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
