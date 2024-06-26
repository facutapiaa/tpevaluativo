import { Component } from '@angular/core';
import { Usuario } from '../../../../models/usuario';
import { Router } from 'express';
import { AuthService } from '../../service/auth.service';
import { FocusTrap } from '@angular/cdk/a11y';
import { FirestoreService } from '../../../shared/services/firestore.service.spec';




@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrl: './iniciosesion.component.css'
})

export class IniciosesionComponent {
  hide = true;
  constructor(
    public servicioAuth: AuthService,
    public servicioRutas: Router,
    public servcioFirestore: FirestoreService, 
  ){}
  //importar la interfaz de usuario inizialisada
  usuario: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }

  //creamos la funcion crear que se activa con el boton
  async iniciar() {
    const credenciales = {
      email: this.usuario.email,
      password: this.usuario.password,
    }

    const res = await this.servicioAuth.IniciarSesion(credenciales.email, credenciales.password)
      //metemos la constante dentro de la coleccion

      .then(res => {
        alert("se produjo un error")
        this.servicioRutas.navigate(['/inicio'])
      })
      .catch(err => {
        alert("hubo un error al inicio sesion")
      })
  }
}
