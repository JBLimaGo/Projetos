import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
  standalone: false
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (!value) {
      return value; // Retorna o valor original se for nulo ou vazio
    }

    let values = value.split(' '); // Divide a string em palavras
    let result = '';

    for (let v of values) {
      result += this.capitalize(v) + ' '; // Aplica capitalize em cada palavra
    }

    return result.trim(); // Remove o espaço extra no final
  }

  capitalize(value: string): string {
    return value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase();
  }
}