import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, delay } from 'rxjs/operators';

interface EmailResponse {
  emails: Array<{email: string}>;
}

@Injectable({
  providedIn: 'root'
})
export class VerificaEmailService {

  constructor(private http: HttpClient) { }

  verificarEmail(email: string) {
    return this.http.get<EmailResponse>('assets/dados/verificarEmail.json')
      .pipe(
        delay(3000),
        map((dados: EmailResponse) => dados.emails),
        map((dados: {email: string}[]) => dados.filter(v => v.email === email)),
        map((dados: any[]) => dados.length > 0)
      );
  }
}