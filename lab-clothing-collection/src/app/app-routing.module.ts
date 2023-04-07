import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './layout/content/content.component';
import { FullComponent } from './layout/full/full.component';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { HomeComponent } from './pages/home/home.component';
import { ListagemColecaoComponent } from './pages/colecao/listagem-colecao/listagem-colecao.component';
import { ListagemModelosComponent } from './pages/modelos/listagem-modelos/listagem-modelos.component';
import { CadastroColecaoComponent } from './pages/colecao/cadastro-colecao/cadastro-colecao.component';
import { CadastroModelosComponent } from './pages/modelos/cadastro-modelos/cadastro-modelos.component';
import { EdicaoColecaoComponent } from './pages/colecao/edicao-colecao/edicao-colecao.component';
import { EdicaoModelosComponent } from './pages/modelos/edicao-modelos/edicao-modelos.component';

const routes: Routes = [

    {
     path: '',
     component: FullComponent,
     children: [
      {
        path: 'home',
        component: HomeComponent,
      },

      {
        path: 'colecao',
        component: ListagemColecaoComponent,
      },

      {
        path: 'modelos',
        component: ListagemModelosComponent,
      },

      {
        path: 'criarcolecao',
        component: CadastroColecaoComponent,
      },

      {
        path: 'editarcolecao',
        component: EdicaoColecaoComponent,
      },

      {
        path: 'criarmodelos',
        component: CadastroModelosComponent,
      },

      {
        path: 'editarmodelos',
        component: EdicaoModelosComponent,
      },
     ]
   },

  {
    path: '',
    component: ContentComponent,
    children: [
     {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },

      {
        path: 'esquecisenha',
        component: EsqueciSenhaComponent,
      },

      {
        path: 'cadastro',
        component: CadastroUsuarioComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
