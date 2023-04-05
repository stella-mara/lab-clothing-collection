import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './layout/content/content.component';
import { FullComponent } from './layout/full/full.component';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { ListagemColecaoComponent } from './pages/colecao/listagem-colecao/listagem-colecao.component';

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
  exports: [RouterModule]
})
export class AppRoutingModule { }
