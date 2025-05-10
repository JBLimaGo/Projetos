import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  standalone: false,
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

  cursos: string[] = [];
  cursosService: CursosService;

  constructor() {
    this.cursosService = new CursosService();    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cursos = this.cursosService.getCursos();
    CursosService.criouNovoCurso.subscribe(
      (curso: string) => {
        this.cursos.push(curso);
      }
    );
  }

}
