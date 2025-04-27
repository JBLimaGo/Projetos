import { Component, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {
  @Input() valor = 0;
  @Output() mudouValor = new EventEmitter();
  @ViewChild('campoInput', { static: false }) campoValorInput!: ElementRef;

  incrementarContador() {
    this.campoValorInput.nativeElement.value++;  
    //this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementarContador() {
    this.campoValorInput.nativeElement.value--;
    //this.valor--;
    this.mudouValor.emit({ novoValor: this.valor });
  }

}
