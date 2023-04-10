import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colecoes } from 'src/app/interfaces/colecoes';
import { Modelos } from 'src/app/interfaces/modelos';
import { ColecoesService } from 'src/app/services/colecoes.service';
import { ModelosService } from 'src/app/services/modelos.service';

@Component({
  selector: 'app-listagem-colecao',
  templateUrl: './listagem-colecao.component.html',
  styleUrls: ['./listagem-colecao.component.scss']
})
export class ListagemColecaoComponent implements OnInit{
  colecoes: Colecoes [] | undefined = [];
  modelos: Modelos [] | undefined = [];
  colecoesModificadas = [];

  constructor ( private ColecoesService: ColecoesService, private ModelosService: ModelosService, private router: Router ) {};

  async ngOnInit(): Promise<void> {
    this.colecoes = await this.ColecoesService.getColecoes().toPromise()
  }

  //fetchColecoesModelos() {
    //const modelosDaColecao = this.modelos.filter(modelo => modelo.colecaoID === colecao[i].id)
    //const newObj = {
      //...colecao[id],
      //qtdModelos: modelosDaColecao.length
    //}
 // }

}
