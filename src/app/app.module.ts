import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from '../environments/environment'
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Guards
import { AuthGuard } from './guards/auth.guard';

//servicios
import { AuthService } from './servicios/auth.service';
import { MetodosService } from './servicios/metodos.service';
import { FirebaseCrudService } from './servicios/firebase-crud.service';

//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { PaginaNoEncontradaComponent } from './componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { InformacionGeneralComponent } from './componentes/informacion-general/informacion-general.component';
import { InformacionPersonalComponent } from './componentes/informacion-personal/informacion-personal.component';
import { InformacionFamiliarComponent } from './componentes/informacion-familiar/informacion-familiar.component';
import { DocumentosComponent } from './componentes/documentos/documentos.component';
import { DropZoneDirective } from './directiva/drop-zone.directive';
import { MiHojaFinalComponent } from './componentes/mi-hoja-final/mi-hoja-final.component';
import { EducacionAptitudesComponent } from './componentes/educacion-aptitudes/educacion-aptitudes.component';
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
import { SeguridadSocialComponent } from './componentes/seguridad-social/seguridad-social.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'personal', component: InformacionPersonalComponent,canActivate:[AuthGuard] },
  { path: 'familiar', component: InformacionFamiliarComponent,canActivate:[AuthGuard] },
  { path: 'educacion', component: EducacionAptitudesComponent,canActivate:[AuthGuard] },
  { path: 'experiencia', component: ExperienciaLaboralComponent,canActivate:[AuthGuard] },
  { path: 'seguridad', component: SeguridadSocialComponent,canActivate:[AuthGuard] },
  { path: 'documentos', component: DocumentosComponent,canActivate:[AuthGuard] },
  { path: 'exportar', component: MiHojaFinalComponent,canActivate:[AuthGuard] },
  { path: '', component: InformacionGeneralComponent,canActivate:[AuthGuard]},
  { path: '**', component: PaginaNoEncontradaComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    PaginaNoEncontradaComponent,
    InformacionGeneralComponent,
    InformacionPersonalComponent,
    InformacionFamiliarComponent,
    DocumentosComponent,
    DropZoneDirective,
    MiHojaFinalComponent,
    EducacionAptitudesComponent,
    ExperienciaLaboralComponent,
    SeguridadSocialComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [AuthService,
              AuthGuard,
              MetodosService,
              FirebaseCrudService],
  bootstrap: [AppComponent]
})

export class AppModule { }
