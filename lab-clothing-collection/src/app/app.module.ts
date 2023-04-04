import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';
import { EsqueciSenha2Component } from './pages/esqueci-senha2/esqueci-senha2.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { Card1Component } from './pages/dashboard/card1/card1.component';
import { Card2Component } from './pages/dashboard/card2/card2.component';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { ListagemModelosComponent } from './pages/modelos/listagem-modelos/listagem-modelos.component';
import { CadastroModelosComponent } from './pages/modelos/cadastro-modelos/cadastro-modelos.component';
import { EdicaoModelosComponent } from './pages/modelos/edicao-modelos/edicao-modelos.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './layout/content/content.component';
import { FullComponent } from './layout/full/full.component';
import { SubmenuComponent } from './components/submenu/submenu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EsqueciSenhaComponent,
    EsqueciSenha2Component,
    CadastroUsuarioComponent,
    Card1Component,
    Card2Component,
    HomeComponent,
    ListagemModelosComponent,
    CadastroModelosComponent,
    EdicaoModelosComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    FullComponent,
    SubmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
