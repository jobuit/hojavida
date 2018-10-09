import { Component, OnInit } from '@angular/core';
import {InformacionFamiliar, DatosDependen, DatosHermanos} from '../../modelos/informacion-familiar';
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
    var tam=this.informacionFamiliarObject.numero_personas_dependen-this.informacionFamiliarObject.dependen.length;
    for(let i=0;i<tam;i++){
      this.informacionFamiliarObject.dependen.push(new DatosDependen('','',''));
    }
  }

  onChangeHermanosSelect(){
    var tam=this.informacionFamiliarObject.numero_hermanos-this.informacionFamiliarObject.hermanos.length;
    for(let i=0;i<tam;i++){
      this.informacionFamiliarObject.hermanos.push(new DatosHermanos('','',''));
    }
  }

  ConseguirDatosFirebase(){
    this.firebaseCrud.TomarObjeto().valueChanges()
    .subscribe(res => {
      if(res!=null){
        this.informacionFamiliarObject = res as InformacionFamiliar;

        if(this.informacionFamiliarObject.dependen==null){
          this.informacionFamiliarObject.dependen=new Array<DatosDependen>();
        }
    
        if(this.informacionFamiliarObject.hermanos==null){
          this.informacionFamiliarObject.hermanos=new Array<DatosHermanos>();
        }
      }
    });
    
  }

  SaveInformationFamiliar(){
    this.firebaseCrud.CrearNuevoObjeto(this.informacionFamiliarObject);
    this.metodoService.MensajeFlash('Informacion guardada correctamente','','success');
  }
}
