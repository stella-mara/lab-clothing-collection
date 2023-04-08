import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

formLogin!: FormGroup;

  constructor (private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(8)]],
      password: ['',[Validators.required, Validators.minLength(8)]]
    })
  }

  onSubmit() {
    if (!this.formLogin.valid) {
      alert('Login inválido')
    }

  }
}
