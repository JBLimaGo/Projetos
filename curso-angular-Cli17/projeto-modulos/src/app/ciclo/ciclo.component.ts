import { Component, OnInit, 
         OnChanges, DoCheck, 
         AfterContentInit, AfterContentChecked, 
         AfterViewInit, AfterViewChecked, 
         OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrl: './ciclo.component.css'
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, 
                                       AfterContentInit, AfterContentChecked, 
                                       AfterViewInit, AfterViewChecked, OnDestroy {

                                       @Input() valorInicial: number = 10;
                                        valorMudou: boolean = false;
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
