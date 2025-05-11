import { Value } from './../../../../pipes/node_modules/regjsparser/parser.d';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.css'
})
export class CursoDetalheComponent {


  id: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.params['id'];
  }

}
