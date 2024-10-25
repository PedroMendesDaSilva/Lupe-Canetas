import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticaçãoService {

  constructor(private http:HttpClient){}
  public autenticar(
    login:string,
    senha:string):Observable<any>{
      return this.http.post(
        'http://localhost:3000/autenticacao/autenticar',
        {login,senha},{observe:'response'})
    }
}
