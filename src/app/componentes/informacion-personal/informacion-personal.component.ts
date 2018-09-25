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

  selectTrabajando:string="";
  selectSolicito:string="";
  selectRecomendo:string="";
  selectParientes:string="";
  selectConocimiento:string="";
  selectCasa:string="";
  selectIngreso:string="";
  selectDeporte:string="";

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

  onChangeTrabajandoSelect(value){
    this.selectTrabajando=value;
  }

  onChangeSolicitoSelect(value){
    this.selectSolicito=value;
  }

  onChangeRecomendoSelect(value){
    this.selectRecomendo=value;
  }

  onChangeParientesSelect(value){
    this.selectParientes=value;
  }

  onChangeConocimientoSelect(value){
    this.selectConocimiento=value;
  }

  onChangeCasaSelect(value){
    this.selectCasa=value;
  }

  onChangeIngresoSelect(value){
    this.selectIngreso=value;
  }

  onChangeDeporteSelect(value){
    this.selectDeporte=value;
  }


}
