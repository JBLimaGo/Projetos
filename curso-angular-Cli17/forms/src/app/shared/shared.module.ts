import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    CampoControlErroComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CampoControlErroComponent
  ]
})
export class SharedModule { }