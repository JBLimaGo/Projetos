import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diretiva-ngswitch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diretiva-ngswitch.component.html',
  styleUrls: ['./diretiva-ngswitch.component.css'] // Corrigido: styleUrl -> styleUrls
})
export class DiretivaNgswitchComponent {
  aba: string = 'home'; // Propriedade inicializada com um valor padrão

}