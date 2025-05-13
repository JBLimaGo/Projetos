import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos: any[] = [];
  pagina: number = 0;
  inscricao: Subscription = new Subscription();

  constructor(private cursosService: CursosService,
              private router : ActivatedRoute,
              private route : Router 
            ) {
    // this.cursos = this.cursosService.getCursos();
    // this.cursos = ['Angular', 'Java', 'React'];
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cursos = this.cursosService.gtCursos();
    this.inscricao =  this.router.params.subscribe(
      (params: any) => { 
        this.pagina = +params['pagina'] || 0;
      }
      // this.cursos = ['Angular', 'Java', 'React'];
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe();
  }

  proximaPagina(): void {
   // this.pagina++;
    this.route.navigate(['/cursos'], 
      {queryParams: {'pagina': ++this.pagina}});
  }

}
