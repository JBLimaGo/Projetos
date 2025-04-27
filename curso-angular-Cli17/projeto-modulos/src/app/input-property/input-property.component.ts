import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso-input',
  templateUrl: './input-property.component.html',
  styleUrl: './input-property.component.css'
})
export class InputPropertyComponent implements OnInit {

  @Input('nome') nomeCurso: string = ''; // Inicializa a variável nomeCurso com uma string vazia  
  

  constructor() {}

  ngOnInit() {}

}
