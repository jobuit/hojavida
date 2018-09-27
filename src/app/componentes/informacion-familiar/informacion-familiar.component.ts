import { Component, OnInit } from '@angular/core';
import {InformacionFamiliar, DatosDependen} from '../../modelos/informacion-familiar';
import { MetodosService } from '../../servicios/metodos.service';
import { FirebaseCrudService } from '../../servicios/firebase-crud.service';

@Component({
  selector: 'app-informacion-familiar',
  templateUrl: './informacion-familiar.component.html',
  styleUrls: ['./informacion-familiar.component.css']
})
export class InformacionFamiliarComponent implements OnInit {

  informacionFamiliarObject:InformacionFamiliar=new InformacionFamiliar();

  constructor(public metodoService:MetodosService,public firebaseCrud:FirebaseCrudService) { }

  ngOnInit() {
    this.firebaseCrud.setOpcion('informacion-familiar');

    this.ConseguirDatosFirebase();
  }

  onChangeDependenSelect(){
    /*for(let i=0;i<this.informacionFamiliarObject.numero_personas_dependen;i++){
      this.informacionFamiliarObject.dependen.push(new DatosDependen('','',''));
    }*/
    
  }

  ConseguirDatosFirebase(){
    this.firebaseCrud.TomarObjeto().valueChanges()
    .subscribe(res => {
      if(res!=null){
        this.informacionFamiliarObject = res as InformacionFamiliar;
        console.log(this.informacionFamiliarObject.dependen)
      }
    });
  }

  SaveInformationFamiliar(){
    for(let i=0;i<this.informacionFamiliarObject.numero_personas_dependen;i++){
      console.log(this.informacionFamiliarObject.dependen[i].nombres_parentesco);
    }

    this.firebaseCrud.CrearNuevoObjeto(this.informacionFamiliarObject);
    this.metodoService.MensajeFlash('Informacion guardada correctamente','','success');
  }
}
