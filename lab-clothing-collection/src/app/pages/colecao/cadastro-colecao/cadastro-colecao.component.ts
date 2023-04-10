import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Colecoes } from 'src/app/interfaces/colecoes';
import { ColecoesService } from 'src/app/services/colecoes.service';

@Component({
  selector: 'app-cadastro-colecao',
  templateUrl: './cadastro-colecao.component.html',
  styleUrls: ['./cadastro-colecao.component.scss'],
})
export class CadastroColecaoComponent implements OnInit {
  formColecao!: FormGroup;
  colecoes: Colecoes[] | undefined = [];

  constructor(
    private router: Router,
    private ColecoesService: ColecoesService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formColecao = this.fb.group({
      nome: ['', [Validators.required]],
      responsavel: ['', [Validators.required]],
      estacao: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      orcamento: ['', [Validators.required]],
      lancamento: ['', [Validators.required]],
    });
  }

  async criarColecao() {
    const colecao: Colecoes = this.formColecao.value;

    await this.ColecoesService.criarColecao(colecao).toPromise();

    this.router.navigateByUrl('/colecao');
  }
}
