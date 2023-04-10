import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Colecoes } from '../interfaces/colecoes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColecoesService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getColecoes(): Observable<Colecoes[]> {
    return this.http.get<Colecoes[]>(`${this.baseUrl}/colecoes`);
  }

  getColecao(id: string): Observable<any> {
    return this.http.get<Colecoes>(`${this.baseUrl}/colecoes/${id}`);
  }

  criarColecao(colecao: Colecoes): Observable<Colecoes> {
    return this.http.post<Colecoes>(`${this.baseUrl}/colecoes`, colecao);
  }

  atualizarColecao(colecao: Colecoes): Observable<any> {
    return this.http.put<any>(
      `${this.baseUrl}/colecoes/${colecao.id}`,
      colecao
    );
  }

  excluirColecao(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/colecoes/${id}`);
  }
}
