import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoModule } from './curso/curso.module';
import { GavetaNavComponent } from './gaveta-nav/gaveta-nav.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    GavetaNavComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
