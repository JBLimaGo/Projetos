import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'], // Corrigido o nome da propriedade de estilo
})
export class DataBindingComponent {
  url = 'http://gmail.com'; // Removida a anotação de tipo redundante

  valorAtual = ''; // Removida a anotação de tipo redundante
  valorSalvo = ''; // Removida a anotação de tipo redundante
  isMouseOver = false; // Removida a anotação de tipo redundante
  nome = ''; // Removida a anotação de tipo redundante
  nomeCurso = 'Angular'; // Removida a anotação de tipo redundante

  pessoa = {
    nome: 'João',
    idade: 20,
    profissao: 'Programador',
  }; // Substituído `any` por um objeto literal

  urlImagem =
    'https://fastly.picsum.photos/id/296/200/300.jpg?hmac=3w6L7NcSbkDRHC36vvfj4JuF0yOHmTjqQS5F9biJyKA';

  getValor() {
    return 1;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onkeyUp(event: KeyboardEvent) {
    this.valorAtual = (event.target as HTMLInputElement).value; // Substituído `<HTMLInputElement>` por `as HTMLInputElement`
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor; // Atualiza o valor atual com o valor recebido
  }

  onMudouValor(evento: { novoValor: number }) {
    // Substituído `any` por um tipo mais específico
    console.log(evento.novoValor);
  }
}