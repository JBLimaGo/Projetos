import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent implements OnInit {
 
  url: string = 'http://gmail.com';  

  urlImagem = 'https://fastly.picsum.photos/id/296/200/300.jpg?hmac=3w6L7NcSbkDRHC36vvfj4JuF0yOHmTjqQS5F9biJyKA'

  getValor(){
    return 1;
  }     

  constructor() { }


  ngOnInit(){
    
  }

}
