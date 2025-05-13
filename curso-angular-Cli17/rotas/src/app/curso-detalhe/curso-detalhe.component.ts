
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService } from '../cursos/cursos.service';


@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {


  id: number;
  inscricao: Subscription = new Subscription();
  curso : any;

  constructor(
    private route: ActivatedRoute, // Injeção do serviço
    private router: Router, // Injeção do serviço
    private cursosService: CursosService // Injeção do serviço
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];

      this.curso = this.cursosService.getCurso(this.id);

      if (this.curso === null) {
        this.router.navigate(['/naoEncontrado']);
      }

    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe();
  }

}
