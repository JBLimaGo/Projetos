import { Component, OnInit, 
  OnChanges, DoCheck, 
  AfterContentInit, AfterContentChecked, 
  AfterViewInit, AfterViewChecked, 
  OnDestroy, Input } from '@angular/core';

@Component({
selector: 'app-ciclo',
templateUrl: './ciclo.component.html',
styleUrls: ['./ciclo.component.css'] // Corrigido o nome da propriedade de estilo
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, 
                                AfterContentInit, AfterContentChecked, 
                                AfterViewInit, AfterViewChecked, OnDestroy {

@Input() valorInicial = 10; // Removida a anotação de tipo redundante
valorMudou = false; // Removida a anotação de tipo redundante

constructor() { 
console.log('constructor - CicloComponent');
}

ngOnInit(): void {
console.log('ngOnInit - CicloComponent');
}

ngOnChanges() {
console.log('ngOnChanges - CicloComponent');
}

ngDoCheck() {
console.log('ngDoCheck - CicloComponent');
}

ngAfterContentInit() {
console.log('ngAfterContentInit - CicloComponent');
}

ngAfterContentChecked() {
console.log('ngAfterContentChecked - CicloComponent');
}

ngAfterViewInit() {
console.log('ngAfterViewInit - CicloComponent');
}

ngAfterViewChecked() {
console.log('ngAfterViewChecked - CicloComponent');
}

ngOnDestroy() {
console.log('ngOnDestroy - CicloComponent');
}
}