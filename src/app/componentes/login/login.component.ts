import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { MetodosService } from '../../servicios/metodos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public nombre:string;

  public emailLogin:string;
  public passLogin:string;

  public emailRegistro:string;
  public passRegistro:string;

  constructor(public authService:AuthService,public router:Router,public metodoService:MetodosService) { }

  ngOnInit() {
    
  }

  LoginEmailPassword(){
    this.authService.LoginUsuarioEmailPassword(this.emailLogin,this.passLogin)
    .then((res)=>{
      this.metodoService.MensajeFlash('Has iniciado sesion correctamente.','','success');
      this.router.navigate(['/']);
    }).catch((err)=>{
      this.metodoService.MensajeFlash(err.message,'','danger');
    });
  }

  RegistrarEmailPassword(){
    this.authService.RegistrarUsuarioEmailPassword(this.emailRegistro,this.passRegistro)
    .then((res)=>{
      this.metodoService.MensajeFlash('Usuario creado correctamente.','','success');
      this.router.navigate(['/']);
    }).catch((err)=>{
      this.metodoService.MensajeFlash(err.message,'','danger');
    });
  }

  TwitterSignIn(){
    this.authService.LoginWithTwitter()
    .then((res)=>{
      this.metodoService.MensajeFlash('Has iniciado sesion correctamente.','','success');
      this.router.navigate(['/']);
    }).catch((err)=>{
      this.metodoService.MensajeFlash(err.message,'','danger');
    });
  }

  FacebookSignIn(){
    this.authService.LoginWithFacebook()
    .then((res)=>{
      this.metodoService.MensajeFlash('Has iniciado sesion correctamente.','','success');
      this.router.navigate(['/']);
    }).catch((err)=>{
      this.metodoService.MensajeFlash(err.message,'','danger');
    });
  }

  GoogleSignIn(){
    this.authService.LoginWithGoogle()
    .then((res)=>{
      this.metodoService.MensajeFlash('Has iniciado sesion correctamente.','','success');
      this.router.navigate(['/']);
    }).catch((err)=>{
      this.metodoService.MensajeFlash(err.message,'','danger');
    });
  }

}
