import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent {
  constructor() {}

  onSubmit(form: any) {
    console.log(form);
  }

  ngOnInit(): void {}
}
