import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {
  private cursos: string[] = ['Angular 2', 'JavaScript', 'Java'];

  constructor() {
    console.log('CursosService');
  }

  getCursos(): string[] {
    return this.cursos;
    //return ['Angular 2', 'JavaScript', 'Java'];//this.cursos;
  }

  addCurso(curso: string): void {
    if (curso.trim()) { // Verifica se o curso não está vazio
      this.cursos.push(curso);
    }
  }

  getCurso(index: number): string {
    return this.cursos[index];
  }
}