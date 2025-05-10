import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {
  private cursos: string[] = ['Angular 2', 'JavaScript', 'Java'];

  constructor() {
    console.log('CursosService');
  }

  getCursos(): string[] {
    return ['Angular 2', 'JavaScript', 'Java'];//this.cursos;
  }

  addCurso(curso: string): void {
    this.cursos.push(curso);
  }

  getCurso(index: number): string {
    return this.cursos[index];
  }
}