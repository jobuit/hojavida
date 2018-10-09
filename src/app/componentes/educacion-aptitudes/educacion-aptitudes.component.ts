import { Component, OnInit } from '@angular/core';
import {EducacionAptitudes, DatosEducacionSuperior} from '../../modelos/educacion-aptitudes';
import { MetodosService } from '../../servicios/metodos.service';
import { FirebaseCrudService } from '../../servicios/firebase-crud.service';

@Component({
  selector: 'app-educacion-aptitudes',
  templateUrl: './educacion-aptitudes.component.html',
  styleUrls: ['./educacion-aptitudes.component.css']
})
export class EducacionAptitudesComponent implements OnInit {

  informacionEducacionObject:EducacionAptitudes=new EducacionAptitudes();

  constructor(public metodoService:MetodosService,public firebaseCrud:FirebaseCrudService) { }

  ngOnInit() {
    this.firebaseCrud.setOpcion('educacion-aptitudes');
    this.ConseguirDatosFirebase();
  }

  async ConseguirDatosFirebase(){
    await this.firebaseCrud.TomarObjeto().valueChanges()
    .subscribe(res => {
      if(res!=null){
        this.informacionEducacionObject = res as EducacionAptitudes;

        if(this.informacionEducacionObject.tecnicos==null){
          this.informacionEducacionObject.tecnicos=new Array<DatosEducacionSuperior>();
        }
        if(this.informacionEducacionObject.tecnologos==null){
          this.informacionEducacionObject.tecnologos=new Array<DatosEducacionSuperior>();
        }
        if(this.informacionEducacionObject.carreras==null){
          this.informacionEducacionObject.carreras=new Array<DatosEducacionSuperior>();
        }
        if(this.informacionEducacionObject.postgrados==null){
          this.informacionEducacionObject.postgrados=new Array<DatosEducacionSuperior>();
        }
      }
    });
  }

  onChangeTecnicosSelect(){
    var tam=this.informacionEducacionObject.numero_tecnicos-this.informacionEducacionObject.tecnicos.length;
    for(let i=0;i<tam;i++){
      this.informacionEducacionObject.tecnicos.push(new DatosEducacionSuperior('','','','',''));
    }
  }

  onChangeTecnologosSelect(){
    var tam=this.informacionEducacionObject.numero_tecnologos-this.informacionEducacionObject.tecnologos.length;
    for(let i=0;i<tam;i++){
      this.informacionEducacionObject.tecnologos.push(new DatosEducacionSuperior('','','','',''));
    }
  }

  onChangeCarrerasSelect(){
    var tam=this.informacionEducacionObject.numero_carreras-this.informacionEducacionObject.carreras.length;
    for(let i=0;i<tam;i++){
      this.informacionEducacionObject.carreras.push(new DatosEducacionSuperior('','','','',''));
    }
  }

  onChangePostgradosSelect(){
    var tam=this.informacionEducacionObject.numero_postgrados-this.informacionEducacionObject.postgrados.length;
    for(let i=0;i<tam;i++){
      this.informacionEducacionObject.postgrados.push(new DatosEducacionSuperior('','','','',''));
    }
  }

  SaveInformationEducacion(){
    this.firebaseCrud.CrearNuevoObjeto(this.informacionEducacionObject);
    this.metodoService.MensajeFlash('Informacion guardada correctamente','','success');
  }

}
