import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { MetodosService } from '../../servicios/metodos.service';
import { Router } from "@angular/router";
import { FirebaseCrudService } from '../../servicios/firebase-crud.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  emailUser:string="";
  photoUser:string="";
  isLogin:boolean;

  constructor(public authService:AuthService,private router:Router,public metodoService:MetodosService,public firebaseCrud:FirebaseCrudService) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.isLogin=true;
        this.emailUser=auth.email;
        this.photoUser=auth.photoURL;
        this.firebaseCrud.setId(auth.uid);
      }
    });
  }

  cerrarSesion(){
    this.authService.Logout()
    .then((res)=>{
      this.metodoService.MensajeFlash('Has cerrado sesion correctamente.','','success');
    }).catch((err)=>{
      this.metodoService.MensajeFlash(err,'','danger');
    });;
  }

}
