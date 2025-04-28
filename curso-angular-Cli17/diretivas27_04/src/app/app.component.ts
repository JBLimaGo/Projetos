import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DiretivaNgifComponent, DiretivaNgswitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'diretivas27_04';
}
