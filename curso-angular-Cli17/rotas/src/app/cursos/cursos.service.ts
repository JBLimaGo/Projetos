import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  gtCursos() {
    return [
      { id: 1, nome: 'Angular' },
      { id: 2, nome: 'Java' },
      { id: 3, nome: 'React' }
    ];
  }

  getCurso(id: number) {  
    let cursos = this.gtCursos();
    for (let i = 0; i < cursos.length; i++) {
      let curso = cursos[i];
      if (curso.id == id) {
        return curso;
      }
    }
    return null;
  }

  constructor() { }
}
