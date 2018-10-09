import { Component, OnInit } from '@angular/core';
import { MetodosService } from '../../servicios/metodos.service';
import { FirebaseCrudService } from '../../servicios/firebase-crud.service';
import {ReferenciasPersonales} from '../../modelos/referencias-personales';

@Component({
  selector: 'app-referencias-personales',
  templateUrl: './referencias-personales.component.html',
  styleUrls: ['./referencias-personales.component.css']
})
export class ReferenciasPersonalesComponent implements OnInit {

  referenciasPersonalesObject:ReferenciasPersonales=new ReferenciasPersonales();

  constructor(public metodoService:MetodosService,public firebaseCrud:FirebaseCrudService) { }

  ngOnInit() {
    this.firebaseCrud.setOpcion('referencias-personales');
    this.ConseguirDatosFirebase();
  }


  SaveReferenciasPersonales(){
    this.firebaseCrud.CrearNuevoObjeto(this.referenciasPersonalesObject);
    this.metodoService.MensajeFlash('Informacion guardada correctamente','','success');
  }

  ConseguirDatosFirebase(){
    this.firebaseCrud.TomarObjeto().valueChanges()
    .subscribe(res => {
      if(res!=null){
        this.referenciasPersonalesObject = res as ReferenciasPersonales;
      }
    });
  }

}
