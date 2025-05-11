import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray',
  standalone: true // Define o pipe como standalone
})
export class FiltroArrayPipe implements PipeTransform {
  transform(value: any[], filtro?: string): any[] {
    if (!value || !filtro) {
      return value;
    }
    return value.filter(item => item.toLowerCase().includes(filtro.toLowerCase()));
  }
}