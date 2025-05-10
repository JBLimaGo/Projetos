import { Component } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  standalone: false,
  templateUrl: './criar-curso.component.html',
  styleUrl: './criar-curso.component.css'
})
export class CriarCursoComponent {

  cursos: string[] = [];

  constructor(private cursosService: CursosService) {
    //this.cursosService = new CursosService(); 
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cursos = this.cursosService.getCursos();
  }

  onAddCurso(curso: string): void {
    this.cursosService.addCurso(curso);
    this.cursos = this.cursosService.getCursos();
  }

}
