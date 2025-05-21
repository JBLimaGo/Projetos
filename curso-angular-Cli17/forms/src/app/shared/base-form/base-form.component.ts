import { Component, OnInit, Directive } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Directive()
export abstract class BaseFormComponent implements OnInit {
  formulario!: FormGroup;

  constructor() {}

  ngOnInit() {}

  abstract submit(): void;

  onSubmit() {
    if (this.formulario.valid) {
      this.submit();
    } else {
      console.log('formulario invalido');
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup | FormArray): void {
    Object.keys(formGroup.controls).forEach((campo) => {
      const controle = formGroup.get(campo);
      if (!controle) return;

      controle.markAsDirty();
      controle.markAsTouched();
      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string): boolean {
    const control = this.formulario.get(campo);
    if (!control) return false;

    return !control.valid && (control.touched || control.dirty);
  }

  verificaRequired(campo: string): boolean {
    const control = this.formulario.get(campo);
    if (!control) return false;

    return control.hasError('required') && (control.touched || control.dirty);
  }

  verificaEmailInvalido(): boolean {
    const campoEmail = this.formulario.get('email');
    if (campoEmail && campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
    return false;
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo),
    };
  }
}
