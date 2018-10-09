import { Component, OnInit } from '@angular/core';
import { MetodosService } from '../../servicios/metodos.service';
import { FirebaseCrudService } from '../../servicios/firebase-crud.service';
import {InformacionPersonal} from '../../modelos/informacion-personal';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.component.html',
  styleUrls: ['./informacion-personal.component.css']
})
export class InformacionPersonalComponent implements OnInit {

  informacionPersonalObject:InformacionPersonal=new InformacionPersonal();

  constructor(public metodoService:MetodosService,public firebaseCrud:FirebaseCrudService) { }

  ngOnInit() {
    this.firebaseCrud.setOpcion('informacion-personal');
    this.ConseguirDatosFirebase();
  }

  SaveInformationPersonal(){
    this.firebaseCrud.CrearNuevoObjeto(this.informacionPersonalObject);
    this.metodoService.MensajeFlash('Informacion guardada correctamente','','success');
  }

  ConseguirDatosFirebase(){
    this.firebaseCrud.TomarObjeto().valueChanges()
    .subscribe(res => {
      if(res!=null){
        this.informacionPersonalObject = res as InformacionPersonal;
      }
    });
  }
  
}
