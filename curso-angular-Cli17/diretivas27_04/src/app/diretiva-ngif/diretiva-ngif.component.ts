import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  standalone: true,
  imports: [],
  templateUrl: './diretiva-ngif.component.html',
  styleUrl: './diretiva-ngif.component.css'
})
export class DiretivaNgifComponent implements OnInit {
  cursos: string[] = ['Angular', 'React', 'Vue'];
  mostrarCursos: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }

}
