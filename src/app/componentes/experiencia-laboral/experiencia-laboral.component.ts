import { Component, OnInit } from '@angular/core';
import {ExperienciaLaboral, Empresas} from '../../modelos/experiencia-laboral';
import { MetodosService } from '../../servicios/metodos.service';
import { FirebaseCrudService } from '../../servicios/firebase-crud.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  experienciaLaboralObject:ExperienciaLaboral=new ExperienciaLaboral();

  constructor(public metodoService:MetodosService,public firebaseCrud:FirebaseCrudService) { }

  ngOnInit() {
    this.firebaseCrud.setOpcion('experiencia-laboral');
    this.ConseguirDatosFirebase();
  }

  ConseguirDatosFirebase(){
    this.firebaseCrud.TomarObjeto().valueChanges()
    .subscribe(res => {
      if(res!=null){
        this.experienciaLaboralObject = res as ExperienciaLaboral;
      }
    });  
  }

  onChangeExperienciasSelect(){
    var tam=this.experienciaLaboralObject.experiencias_laborales-this.experienciaLaboralObject.empresas.length;
    for(let i=0;i<tam;i++){
      this.experienciaLaboralObject.empresas.push(new Empresas('','','','','','','','','','','','','','','',''));
    }
  }

  SaveInformationExperiencia(){
    this.firebaseCrud.CrearNuevoObjeto(this.experienciaLaboralObject);
    this.metodoService.MensajeFlash('Informacion guardada correctamente','','success');
  }

}
 
