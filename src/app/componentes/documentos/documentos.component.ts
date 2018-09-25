import { Component, OnInit } from '@angular/core';
import { AngularFireUploadTask,AngularFireStorageReference } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { FirebaseCrudService } from '../../servicios/firebase-crud.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  ref:AngularFireStorageReference;
  downloadURL: any;
  imgURL:string;

  // Main task 
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  imgs:Observable<any[]>;

  constructor(public firebaseCrud:FirebaseCrudService) { }

  ngOnInit(){
    this.imgs = this.firebaseCrud.TomarDocumentos();
  }
  
  toggleHover(event: boolean) {
    this.isHovering = event;
  }


  startUpload(event: FileList) {
    for(var i=0;i<event.length;i++){
      console.log(event.item(i));
      var file = event.item(i);
      this.firebaseCrud.subirImagen(file,'documentos');
    }
  }

  EliminarImagen(id:any){
    console.log(id);
    this.firebaseCrud.EliminarDocumento(id);
  }

}