import { Component, OnInit } from '@angular/core';
import { MetodosService } from '../../servicios/metodos.service';
import { FirebaseCrudService } from '../../servicios/firebase-crud.service';
import {InformacionGeneral} from '../../modelos/informacion-general';
import {InformacionPersonal} from '../../modelos/informacion-personal';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

declare var $:any;

@Component({
  selector: 'app-mi-hoja-final',
  templateUrl: './mi-hoja-final.component.html',
  styleUrls: ['./mi-hoja-final.component.css']
})
export class MiHojaFinalComponent implements OnInit {

  informacionGeneralObject:InformacionGeneral=new InformacionGeneral();
  informacionPersonalObject:InformacionPersonal=new InformacionPersonal();
  imageData:any;

  estado_civil:any;

  constructor(public metodoService:MetodosService,public firebaseCrud:FirebaseCrudService) { }

  ngOnInit() {
    this.ConseguirDatosFirebase();
  }

  public downloadPDF(url:string){
   console.log(url);
    html2canvas(document.getElementById('contenido'),{ allowTaint: true }).then(function(canvas) {
      var img = canvas.toDataURL("image/png");
      var doc = new jsPDF();
      doc.addImage(img,'JPEG',0,0);
      doc.save('test.pdf');
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
      }
    });

    this.firebaseCrud.setOpcion('informacion-personal');
    this.firebaseCrud.TomarObjeto().valueChanges()
    .subscribe(res => {
      if(res!=null){
        this.informacionPersonalObject = res as InformacionPersonal;
      }
    });

  }

  getSelectedOptionText(event: Event) {
    let selectedOptions = event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;
    let selectElementText = selectedOptions[selectedIndex].text;
    return selectElementText;
 }

  exportarPDF(url:string){
    this.downloadPDF(url);
  }

}
