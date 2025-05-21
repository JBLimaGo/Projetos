import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CepResponse } from '../models/cep';


@Injectable({
  providedIn: 'root'
})

export class ConsultaCepService {
  constructor(private http: HttpClient) { }

  consultaCEP(cep: string): Observable<CepResponse> {
    return this.http.get<CepResponse>(`https://viacep.com.br/ws/${cep}/json`);
}
}
