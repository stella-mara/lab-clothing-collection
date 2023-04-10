import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modelos } from 'src/app/interfaces/modelos';
import { ColecoesService } from 'src/app/services/colecoes.service';
import { ModelosService } from 'src/app/services/modelos.service';

@Component({
  selector: 'app-listagem-modelos',
  templateUrl: './listagem-modelos.component.html',
  styleUrls: ['./listagem-modelos.component.scss']
})
export class ListagemModelosComponent implements OnInit {
  modelos : Modelos [] | undefined = [];
  
  constructor ( private ModelosService: ModelosService, private ColecoesService: ColecoesService, private router: Router ) {}
  
  async ngOnInit(): Promise<void> {
    this.modelos = await this.ModelosService.getModelos().toPromise()
  }

}
