import { Component, OnInit } from '@angular/core';
import {InformacionFamiliar} from '../../modelos/informacion-familiar';

@Component({
  selector: 'app-informacion-familiar',
  templateUrl: './informacion-familiar.component.html',
  styleUrls: ['./informacion-familiar.component.css']
})
export class InformacionFamiliarComponent implements OnInit {

  informacionFamiliarObject:InformacionFamiliar=new InformacionFamiliar();

  constructor() { }

  ngOnInit() {
    this.informacionFamiliarObject.numero_personas_dependen=0;
  }
}
