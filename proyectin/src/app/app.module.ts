import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';

//FIREBASE -> importamos herramientas de la base de datos 
import {AngularFireModule} from '@angular/fire/compat'; //trabaja con las colecciones de la informacion
import {AngularFireAuthModule} from '@angular/fire/compat/auth';  //trabaja con la autentificacion
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //trabaja con imagenes y archivos
import { environment } from 'src/environments/environments'  //vinculaa la BD con la app


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }