import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso-input',
  templateUrl: './input-property.component.html',
  styleUrl: './input-property.component.css'
})
export class InputPropertyComponent {

  @Input() nomeCurso = ''; // Inicializa a variável nomeCurso com uma string vazia  

}
