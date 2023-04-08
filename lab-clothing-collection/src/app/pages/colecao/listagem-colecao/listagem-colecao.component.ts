import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-colecao',
  templateUrl: './listagem-colecao.component.html',
  styleUrls: ['./listagem-colecao.component.scss']
})
export class ListagemColecaoComponent implements OnInit{
data: any

  ngOnInit(): void {
    fetch('http://localhost:3000/colecoes').then(response => response.json()).then((colecoesData) => {
      this.data = colecoesData
    });
  }

}
