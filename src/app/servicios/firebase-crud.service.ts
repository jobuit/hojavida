import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireObject, AngularFireList} from 'angularfire2/database';
import { AngularFireStorage,AngularFireStorageReference } from 'angularfire2/storage';
import {InformacionGeneral} from '../modelos/informacion-general';
import { finalize } from 'rxjs/operators';
import { MetodosService } from '../servicios/metodos.service';
import { Observable } from 'rxjs';

@Injectable()
export class FirebaseCrudService {

  ref:AngularFireStorageReference;
  task: any;
  downloadURL: any;
  imgURL:string;
  id_user:string;
  opcion:string;
  informacionGeneralObject:InformacionGeneral=new InformacionGeneral();
  object:AngularFireObject<any>;
  list:Observable<any[]>;
  private dbPath = '/camposhv';

  constructor(private firebase:AngularFireDatabase,private storage: AngularFireStorage,private metodosServicios:MetodosService) {  }

  setId(id:any){
      this.id_user = id;
  }

  setOpcion(opcion:any){
    this.opcion=opcion;
  }

   async subirImagen(file: File,paquete:string) {

    var folder=paquete;

     if(paquete=='perfil'){
      paquete+="/"+this.id_user+"/avatar";
     }else{
       paquete+="/"+this.id_user+"/"+file.name;
     }

    this.task = await this.storage.upload(paquete, file);

    this.ref = this.storage.ref(paquete);
    this.ref.getDownloadURL().subscribe(url=>{
      this.imgURL = url;
      if(folder=='perfil'){
        this.ActualizarImagenPerfil(url);
      }else{
        this.AgregarImagenPortafolio(url,folder,file.name);
        console.log(url);
      }
      url="";
    });
    
    }

    ActualizarImagenPerfil(url:string){
    this.firebase.object(this.dbPath+'/'+this.id_user+'/'+this.opcion)
    .update({ 
      avatar_url: url
    }).then((res)=>{
      this.metodosServicios.MensajeFlash('Imagen actualizada correctamente.','','success');
    });
  }

  AgregarImagenPortafolio(url:string,folder:string,name:string){
    this.firebase.list(this.dbPath+'/'+this.id_user+'/'+folder).push({url:url,name:name});
  }

   TomarDocumentos(){
    var ref =this.firebase.list(this.dbPath+'/'+this.id_user+'/documentos')
      return this.list =  ref.snapshotChanges().map(changes => {
       return changes.map(c => ({ key: c.payload.key, ...c.payload.val() 
    }));
  });
  }

  EliminarDocumento(id:string) {
    this.firebase.object(this.dbPath+'/'+this.id_user+'/documentos/' + id).remove();
    this.metodosServicios.MensajeFlash('Documento eliminado correctamente.','','danger');
  }

  TomarObjeto(){
    return this.object=this.firebase.object(this.dbPath+'/'+this.id_user+'/'+this.opcion);
  }

  CrearNuevoObjeto(objeto: any): void {
    this.firebase.list(this.dbPath+'/'+this.id_user).set(this.opcion,objeto);
  }

}
