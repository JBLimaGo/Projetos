import { Component, OnInit } from '@angular/core';
import { FiltroArrayPipe } from '../filtro-array.pipe'; // Importe o pipe standalone
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css'],
  standalone: true, // Torne o componente standalone
  imports: [FiltroArrayPipe] // Adicione o pipe standalone aqui
})
export class ExemplosPipesComponent {

  constructor() { }

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };

  livros: string[] = ['Java', 'Angular 2'];


  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000);
  });

  valorAsync2 = interval(2000)
  .pipe(
    map(valor => 'Valor assíncrono 2')
  ); 

  obterCursos() {
 
  }

  ngOnInit() {
  }


}
