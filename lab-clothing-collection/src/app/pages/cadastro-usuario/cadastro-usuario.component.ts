import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss'],
})
export class CadastroUsuarioComponent implements OnInit {
  formUsuario!: FormGroup;
  usuarios: Usuarios[] | undefined = [];

  constructor(
    private UsuariosService: UsuariosService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formUsuario = this.fb.group({
      nome: ['', [Validators.required]],
      empresa: ['', [Validators.required]],
      cnpj: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  async criarUsuario() {
    if (!this.formUsuario.valid) {
      alert('Formulario inválido');
      return;
    }
    const usuario: Usuarios = this.formUsuario.value;

    await this.UsuariosService.criarUsuario(usuario).toPromise();

    this.router.navigateByUrl('/login');
  }
}
