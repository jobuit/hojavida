import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class MetodosService {

  constructor(public toastr:ToastrService) { }

  MensajeFlash(msj,titulo,tipo){
    if(tipo=='success'){
      this.toastr.success(titulo,msj);
    }else if(tipo=='danger'){
      this.toastr.error(titulo,msj);
    }else if(tipo=='info'){
      this.toastr.info(titulo,msj);
    }
  }

}
