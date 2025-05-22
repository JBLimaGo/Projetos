import { Component, Input } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.css'],
})
export class FormDebugComponent {
  @Input() form!: FormGroup | NgForm;

  isNgForm(form: FormGroup | NgForm): form is NgForm {
    return 'submitted' in form;
  }
}
