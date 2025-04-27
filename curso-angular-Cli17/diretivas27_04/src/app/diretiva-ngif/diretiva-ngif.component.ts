import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  standalone: true,
  imports: [],
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css'] // Corrigido: styleUrl -> styleUrls
})
export class DiretivaNgifComponent {
  cursos: string[] = ['Angular', 'React', 'Vue']; // Lista de cursos inicializada
  mostrarCursos = false; // Tipo inferido automaticamente pelo TypeScript

  /**
   * Alterna a visibilidade da lista de cursos.
   */
  onMostrarCursos(): void {
    this.mostrarCursos = !this.mostrarCursos; // Inverte o valor de mostrarCursos
  }
}