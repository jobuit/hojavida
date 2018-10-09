import { Component, OnInit } from '@angular/core';
import { MetodosService } from '../../servicios/metodos.service';
import { FirebaseCrudService } from '../../servicios/firebase-crud.service';
import {InformacionGeneral} from '../../modelos/informacion-general';
import {InformacionPersonal} from '../../modelos/informacion-personal';
import {InformacionFamiliar} from '../../modelos/informacion-familiar';
import {EducacionAptitudes} from '../../modelos/educacion-aptitudes';
import {ExperienciaLaboral} from '../../modelos/experiencia-laboral';
import {SeguridadSocial} from '../../modelos/seguridad-social';
import {ReferenciasPersonales} from '../../modelos/referencias-personales';

import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import { Observable } from 'rxjs/Observable';

declare var $:any;

@Component({
  selector: 'app-mi-hoja-final',
  templateUrl: './mi-hoja-final.component.html',
  styleUrls: ['./mi-hoja-final.component.css']
})
export class MiHojaFinalComponent implements OnInit {

  informacionGeneralObject:InformacionGeneral=new InformacionGeneral();
  informacionPersonalObject:InformacionPersonal=new InformacionPersonal();
  informacionFamiliarObject:InformacionFamiliar=new InformacionFamiliar();
  informacionEducacionObject:EducacionAptitudes=new EducacionAptitudes();
  experienciaLaboralObject:ExperienciaLaboral=new ExperienciaLaboral();
  informacionSeguridadObject:SeguridadSocial=new SeguridadSocial();
  referenciasPersonalesObject:ReferenciasPersonales=new ReferenciasPersonales();

  imageData:any;

  imgs:Observable<any[]>;
  imagenes:any[];

  estado_civil:any;

  constructor(public metodoService:MetodosService,public firebaseCrud:FirebaseCrudService) { }

  ngOnInit() {
    this.ConseguirDatosFirebase();
    this.imgs = this.firebaseCrud.TomarDocumentos();
    this.imgs.forEach(element => {
      this.imagenes=element;
      for(var i=0;i<this.imagenes.length;i++){
        this.imagenes[i].url = this.imagenes[i].url.replace('https://firebasestorage.googleapis.com/v0/b', '');
      }
    });

    

  }

  downloadPDF(){
    var limit=this.imagenes.length;
    html2canvas(document.getElementById('contenido'),{ allowTaint: true }).then(function(canvas) {
      var doc = new jsPDF();
      var img1 = canvas.toDataURL("image/png");
      doc.addImage(img1,'JPEG',0,0);

      html2canvas(document.getElementById('contenido2'),{ allowTaint: true }).then(function(canvas) {
        doc.addPage();
        var img2 = canvas.toDataURL("image/png");
        doc.addImage(img2,'JPEG',0,0);
        

        html2canvas(document.getElementById('contenido3'),{ allowTaint: true }).then(function(canvas) {
          doc.addPage();
          var img3 = canvas.toDataURL("image/png");
          doc.addImage(img3,'JPEG',0,0);

          html2canvas(document.getElementById('contenido4'),{ allowTaint: true }).then(function(canvas) {
            doc.addPage();
            var img3 = canvas.toDataURL("image/png");
            doc.addImage(img3,'JPEG',0,0);
  
            var cont=0;
            for(var i=0;i<limit;i++){
                html2canvas(document.getElementById('imagen'+i),{ allowTaint: true }).then(function(canvas) {
                doc.addPage();
                var img = canvas.toDataURL("image/png");
                doc.addImage(img,'JPEG',0,0);
              }).then((res)=>{
                cont+=1;
                if(cont==limit){
                  doc.save('hoja_vida.pdf');
                } 
              })
            }
            
          });

        });

      });

    });
  }

  ConseguirDatosFirebase(){
    this.firebaseCrud.setOpcion('informacion-general');
    this.firebaseCrud.TomarObjeto().valueChanges()
    .subscribe(res => {
      if(res!=null){
        this.informacionGeneralObject = res as InformacionGeneral;

        if(this.informacionGeneralObject.avatar_url==null){
          this.informacionGeneralObject.avatar_url="assets/img/avatar.png";
        }else{
          this.informacionGeneralObject.avatar_url = this.informacionGeneralObject.avatar_url.replace('https://firebasestorage.googleapis.com/v0/b', '');
        }
      }else{
        this.informacionGeneralObject.avatar_url="assets/img/avatar.png";
      }
    });

    this.firebaseCrud.setOpcion('informacion-personal');
    this.firebaseCrud.TomarObjeto().valueChanges()
    .subscribe(res => {
      if(res!=null){
        this.informacionPersonalObject = res as InformacionPersonal;
      }
    });

    this.firebaseCrud.setOpcion('informacion-familiar');
    this.firebaseCrud.TomarObjeto().valueChanges()
    .subscribe(res => {
      if(res!=null){
        this.informacionFamiliarObject = res as InformacionFamiliar;
      }
    });

    this.firebaseCrud.setOpcion('educacion-aptitudes');
    this.firebaseCrud.TomarObjeto().valueChanges()
    .subscribe(res => {
      if(res!=null){
        this.informacionEducacionObject = res as EducacionAptitudes;
      }
    });

    this.firebaseCrud.setOpcion('experiencia-laboral');
    this.firebaseCrud.TomarObjeto().valueChanges()
    .subscribe(res => {
      if(res!=null){
        this.experienciaLaboralObject = res as ExperienciaLaboral;
      }
    });

    this.firebaseCrud.setOpcion('seguridad-social');
    this.firebaseCrud.TomarObjeto().valueChanges()
    .subscribe(res => {
      if(res!=null){
        this.informacionSeguridadObject = res as SeguridadSocial;
      }
    });

    this.firebaseCrud.setOpcion('referencias-personales');
    this.firebaseCrud.TomarObjeto().valueChanges()
    .subscribe(res => {
      if(res!=null){
        this.referenciasPersonalesObject = res as ReferenciasPersonales;
      }
    });
  }

  exportarPDF(){
    this.downloadPDF();
  }

}
