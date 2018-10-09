import { Component, OnInit } from '@angular/core';
import { MetodosService } from '../../servicios/metodos.service';
import { FirebaseCrudService } from '../../servicios/firebase-crud.service';
import {SeguridadSocial} from '../../modelos/seguridad-social';

@Component({
  selector: 'app-seguridad-social',
  templateUrl: './seguridad-social.component.html',
  styleUrls: ['./seguridad-social.component.css']
})
export class SeguridadSocialComponent implements OnInit {

  informacionSeguridadObject:SeguridadSocial=new SeguridadSocial();

  constructor(public metodoService:MetodosService,public firebaseCrud:FirebaseCrudService) { }

  ngOnInit() {
    this.firebaseCrud.setOpcion('seguridad-social');
    this.ConseguirDatosFirebase();
  }

  SaveInformationSeguridad(){
    this.firebaseCrud.CrearNuevoObjeto(this.informacionSeguridadObject);
    this.metodoService.MensajeFlash('Informacion guardada correctamente','','success');
  }

  ConseguirDatosFirebase(){
    this.firebaseCrud.TomarObjeto().valueChanges()
    .subscribe(res => {
      if(res!=null){
        this.informacionSeguridadObject = res as SeguridadSocial;
      }
    });
  }
}
