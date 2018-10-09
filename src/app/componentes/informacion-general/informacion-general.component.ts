import { Component, OnInit } from '@angular/core';
import { MetodosService } from '../../servicios/metodos.service';
import { FirebaseCrudService } from '../../servicios/firebase-crud.service';
import {InformacionGeneral} from '../../modelos/informacion-general';

declare var $:any;

@Component({
  selector: 'app-informacion-general',
  templateUrl: './informacion-general.component.html',
  styleUrls: ['./informacion-general.component.css']
})
export class InformacionGeneralComponent implements OnInit {

  informacionGeneralObject:InformacionGeneral=new InformacionGeneral();

  constructor(public metodoService:MetodosService,public firebaseCrud:FirebaseCrudService) { }
 
  ngOnInit() {

    this.firebaseCrud.setOpcion('informacion-general');

    this.ConseguirDatosFirebase();

    function readURL(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e:any) {
            
              $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
              $('#imagePreview').hide();
              $('#imagePreview').fadeIn(1000);

          }
          reader.readAsDataURL(input.files[0]);
      }
  }

  $("#imageUpload").change(function () {
      readURL(this);
  });

  }

  startUpload(event: FileList) {
    var file = event.item(0);
    this.firebaseCrud.subirImagen(file,'perfil');
  }

  SaveInformationGeneral(){
    this.firebaseCrud.CrearNuevoObjeto(this.informacionGeneralObject);
    this.metodoService.MensajeFlash('Informacion guardada correctamente','','success');
  }

  ConseguirDatosFirebase(){
    this.firebaseCrud.TomarObjeto().valueChanges()
    .subscribe(res => {
      if(res!=null){
        this.informacionGeneralObject = res as InformacionGeneral;

        if(this.informacionGeneralObject.avatar_url==null){
          this.informacionGeneralObject.avatar_url="assets/img/avatar.png";
        }
      }else{
        this.informacionGeneralObject.avatar_url="assets/img/avatar.png";
      }
    });
  }

}
