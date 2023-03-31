import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './layout/content/content.component';
import { FullComponent } from './layout/full/full.component';
import { SubmenuComponent } from './layout/submenu/submenu.component';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [

    {
     path: '',
     component: FullComponent,
     children: [

      {
        path: 'sidebar',
        component: SidebarComponent
      },

      {
        path: 'header',
        component: HeaderComponent,
      }

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

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
