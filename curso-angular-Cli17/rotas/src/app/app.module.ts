import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routerConfig } from './app.rountin';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';


@NgModule({
  declarations: [
    AppComponent,
    CursoDetalheComponent
  ],
  imports: [
    BrowserModule,
    routerConfig
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }