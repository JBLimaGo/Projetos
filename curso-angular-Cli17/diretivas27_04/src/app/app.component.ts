import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DiretivaNgifComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'diretivas27_04';
}
