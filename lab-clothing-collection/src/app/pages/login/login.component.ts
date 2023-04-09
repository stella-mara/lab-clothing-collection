import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/interfaces/usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

formLogin!: FormGroup;
usuarios: Usuarios[] = [];

  constructor (private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(8)]]
    })
    
// GET usuarios
  }

  onSubmit() {
    if (this.formLogin.valid) {
      return alert('Login válido')
    } else {
      this.router.navigateByUrl('/home')
      alert('Login inválido')
    }

  }
}
