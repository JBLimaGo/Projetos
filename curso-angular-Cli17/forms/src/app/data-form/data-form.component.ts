import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
  FormGroup,
} from '@angular/forms';
import { EMPTY } from 'rxjs';
import {
  map,
  tap,
  distinctUntilChanged,
  switchMap,
  filter,
} from 'rxjs/operators';
import { EstadoBr } from './../shared/models/estado-br.model';
import { DropdownService } from './../shared/services/dropdown.service';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { FormValidations } from '../shared/form-validations';
import { VerificaEmailService } from './services/verifica-email.service';
import { BaseFormComponent } from '../shared/base-form/base-form.component';
import { Cidade } from '../shared/models/cidade';

interface Cargo {
  nome: string;
  nivel: string;
  desc: string;
}

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css'],
})
export class DataFormComponent extends BaseFormComponent implements OnInit {
  frameworks = ['Angular', 'React', 'Vue', 'Sencha'];
  override formulario!: FormGroup;

  estados: EstadoBr[] = [];
  cidades: Cidade[] = [];
  cargos: any[] = [];
  tecnologias: any[] = [];
  newsletterOp: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService,
    private verificaEmailService: VerificaEmailService
  ) {
    super();
  }

  override ngOnInit() {
    this.dropdownService
      .getEstadosBr()
      .subscribe((dados) => (this.estados = dados));

    this.cargos = this.dropdownService.getCargos();
    this.tecnologias = this.dropdownService.getTecnologias();
    this.newsletterOp = this.dropdownService.getNewsletter();

    this.formulario = this.formBuilder.group({
      nome: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(35),
        ],
      ],
      email: [
        null,
        [Validators.required, Validators.email],
        [this.validarEmail.bind(this)],
      ],
      confirmarEmail: [null, [FormValidations.equalsTo('email')]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      }),
      cargo: [null],
      tecnologias: [null],
      newsletter: ['s'],
      termos: [null, Validators.pattern('true')],
      frameworks: this.buildFrameworks(),
    });

    // Monitora mudanças no CEP
    this.formulario
      .get('endereco.cep')
      ?.statusChanges.pipe(
        distinctUntilChanged(),
        tap((value) => console.log('status CEP:', value)),
        switchMap((status) =>
          status === 'VALID'
            ? this.cepService.consultaCEP(
                this.formulario.get('endereco.cep')?.value
              )
            : EMPTY
        )
      )
      .subscribe((dados) => (dados ? this.populaDadosForm(dados) : {}));

    // Monitora mudanças no estado
    this.formulario
      .get('endereco.estado')
      ?.valueChanges.pipe(
        tap((estado) => console.log('Novo estado: ', estado)),
        map((estado) => this.estados.filter((e) => e.sigla === estado)),
        map((estados) => (estados && estados.length > 0 ? estados[0].id : 0)),
        filter((estadoId) => estadoId > 0), // Filtra valores inválidos
        switchMap((estadoId: number) =>
          this.dropdownService.getCidades(estadoId)
        ),
        tap(console.log)
      )
      .subscribe((cidades) => (this.cidades = cidades));
  }

  buildFrameworks() {
    const values = this.frameworks.map((v) => new FormControl(false));
    return this.formBuilder.array(values, [
      FormValidations.requiredMinCheckbox(1),
    ]);
  }

  submit() {
    if (this.formulario.valid) {
      let valueSubmit = Object.assign({}, this.formulario.value);

      valueSubmit = Object.assign(valueSubmit, {
        frameworks: valueSubmit.frameworks
          .map((v: boolean, i: number) => (v ? this.frameworks[i] : null))
          .filter((v: string | null) => v !== null),
      });

      this.http
        .post('https://httpbin.org/post', JSON.stringify(valueSubmit))
        .subscribe(
          (dados) => {
            console.log(dados);
            // this.formulario.reset();
          },
          (error: any) => alert('erro')
        );
    }
  }

  consultaCEP() {
    const cep = this.formulario.get('endereco.cep')?.value;

    if (cep != null && cep !== '') {
      this.cepService
        .consultaCEP(cep)
        .subscribe((dados) => this.populaDadosForm(dados));
    }
  }

  populaDadosForm(dados: any) {
    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      },
    });
  }

  resetaDadosForm() {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null,
      },
    });
  }

  setarCargo() {
    const cargo: Cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
    this.formulario.get('cargo')?.setValue(cargo);
  }

  compararCargos(obj1: Cargo | null, obj2: Cargo | null): boolean {
    return obj1 && obj2
      ? obj1.nome === obj2.nome && obj1.nivel === obj2.nivel
      : obj1 === obj2;
  }

  setarTecnologias() {
    this.formulario.get('tecnologias')?.setValue(['java', 'javascript', 'php']);
  }

  validarEmail(formControl: FormControl) {
    return this.verificaEmailService
      .verificarEmail(formControl.value)
      .pipe(
        map((emailExiste) => (emailExiste ? { emailInvalido: true } : null))
      );
  }

  getFrameworksControls(): FormControl[] {
    const control = this.formulario.get('frameworks');
    return control instanceof FormArray
      ? (control.controls as FormControl[])
      : [];
  }

  getControl(path: string): FormControl {
    const control = this.formulario.get(path);
    if (!control) {
      throw new Error(`Control ${path} not found`);
    }
    return control as FormControl;
  }

  override aplicaCssErro(campo: string): { 'has-error': boolean; 'has-feedback': boolean } {
    const control = this.formulario.get(campo);
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }
}
