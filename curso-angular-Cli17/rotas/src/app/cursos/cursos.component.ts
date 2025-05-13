import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {
  cursos: any[] = [];

  constructor(private cursosService: CursosService) {
    // this.cursos = this.cursosService.getCursos();
    // this.cursos = ['Angular', 'Java', 'React'];
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cursos = this.cursosService.gtCursos();
    // this.cursos = ['Angular', 'Java', 'React'];
  }

}
