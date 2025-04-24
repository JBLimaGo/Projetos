import { Component } from '@angular/core';

@Component({
  selector: 'app-gaveta-nav',
  templateUrl: './gaveta-nav.component.html',
  styleUrls: ['./gaveta-nav.component.css']
})
export class GavetaNavComponent {
  isSidebarClosed = false;

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }
}