import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Modelos } from 'src/app/interfaces/modelos';
import { ModelosService } from 'src/app/services/modelos.service';

@Component({
  selector: 'app-cadastro-modelos',
  templateUrl: './cadastro-modelos.component.html',
  styleUrls: ['./cadastro-modelos.component.scss'],
})
export class CadastroModelosComponent implements OnInit {
  formModelo!: FormGroup;
  modelos: Modelos[] | undefined = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private ModelosService: ModelosService
  ) {}

  ngOnInit(): void {
    this.formModelo = this.fb.group({
      nome: [''],
      tipo: [''],
      colecao: [''],
      responsavel: [''],
      bordado: [''],
      estampa: [''],
    });
  }

  async criarModelo() {
    //const modelo: Modelos = this.formModelo.value;
    //await this.ModelosService.criarModelo(modelo).toPromise()
    //this.router.navigateByUrl('/modelo')
  }
}
