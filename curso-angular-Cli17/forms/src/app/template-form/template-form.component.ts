import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { NgForm, NgModel } from '@angular/forms';
import { CepResponse } from '../shared/models/cep';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  usuario: any = {
    nome: '',
    email: '',
  };

  onSubmit(formulario: NgForm) {
    console.log(formulario);

    // form.value
    // console.log(this.usuario);

    this.http
      .post('https://httpbin.org/post', JSON.stringify(formulario.value))
      .subscribe((dados) => {
        console.log(dados);
        formulario.form.reset();
      });
  }

  constructor(
    private http: HttpClient,
    private cepService: ConsultaCepService
  ) {}

  ngOnInit() {}

  verificaValidTouched(campo: NgModel): boolean {
    return campo && campo.valid !== null && campo.touched !== null
      ? !campo.valid && campo.touched
      : false;
  }

  aplicaCssErro(campo: NgModel): { [key: string]: boolean } {
    if (!campo) return { 'is-invalid': false, 'is-valid': false };

    return {
      'is-invalid': this.verificaValidTouched(campo),
      'is-valid': (campo.valid && campo.touched) || false,
    };
  }

  consultaCEP(event: any, form: NgForm) {
    const valor = (event.target as HTMLInputElement)?.value || '';

    if (valor && valor !== '') {
      this.cepService
        .consultaCEP(valor)
        .subscribe((dados) => this.populaDadosForm(dados, form));
    }
  }

  populaDadosForm(dados: CepResponse, formulario: NgForm) {
    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      },
    });

    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        // cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      },
    });

    // console.log(form);
  }

  resetaDadosForm(formulario: NgForm) {
    formulario.form.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null,
      },
    });
  }
}
