import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();

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
      this.emitirCursoCriado.emit(curso); // Emite o evento com o curso criado
      CursosService.criouNovoCurso.emit(curso); // Emite o evento com o curso criado
    }
  }

  getCurso(index: number): string {
    return this.cursos[index];
  }
}