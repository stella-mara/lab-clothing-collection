import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuarios } from '../interfaces/usuarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(`${this.baseUrl}/usuarios`);
  }

  getUsuario(id: string): Observable<any> {
    return this.http.get<Usuarios>(`${this.baseUrl}/usuarios/${id}`);
  }

  criarUsuario(usuario: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(`${this.baseUrl}/usuarios`, usuario);
  }

  atualizarUsuario(usuario: Usuarios): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/usuarios/${usuario.id}`, usuario);
  }

  excluirUsuario(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/usuarios/${id}`);
  }

}
