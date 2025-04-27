import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'projeto-modulos';
  valor = 5;
  deletarCiclo = false;
  mudarValor() {
    this.valor++;
  }

  destruirCiclo() {
    this.deletarCiclo = true;
  }

}
