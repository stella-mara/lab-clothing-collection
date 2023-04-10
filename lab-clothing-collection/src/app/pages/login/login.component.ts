import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  usuarios: any | Usuarios[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private UsuariosService: UsuariosService
  ) {}

  async ngOnInit(): Promise<void> {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.usuarios = await this.UsuariosService.getUsuarios().toPromise();
  }

  onSubmit() {
    if (this.formLogin.valid) {
      const credenciais = this.formLogin.value;
      const usuario = this.usuarios.find(
        (usuario: { email: any; senha: any }) =>
          usuario.email === credenciais.email &&
          usuario.senha === credenciais.password
      );
      if (usuario) {
        this.router.navigateByUrl('/home');
      } else {
        alert('Email e/ou senha incorreto');
      }
    } else {
      alert('Login inválido');
    }
  }
}
