import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';

// Importa e registra o locale pt-BR
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
  ],
  providers: [
    {
      provide: LOCALE_ID,  useValue: 'pt-BR'  // Define o locale padrão como pt-BR
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
