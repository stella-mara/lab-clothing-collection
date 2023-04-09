import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modelos } from '../interfaces/modelos';

@Injectable({
  providedIn: 'root'
})
export class ModelosService {
  criarModelo(modelo: Modelos) {
    throw new Error('Method not implemented.');
  }

  private baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getModelos(): Observable<Modelos[]> {
    return this.http.get<Modelos[]>(`${this.baseUrl}/modelos`);
  }

  getModelo(id: string): Observable<any> {
    return this.http.get<Modelos>(`${this.baseUrl}/modelos/${id}`);
  }

  criarColecao(modelo: Modelos): Observable<Modelos> {
    return this.http.post<Modelos>(`${this.baseUrl}/modelos`, modelo);
  }

  atualizarModelo(modelo: Modelos): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/modelos/${modelo.id}`, modelo);
  }

  excluirModelo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/modelos/${id}`);
  }
}
