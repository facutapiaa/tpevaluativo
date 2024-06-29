import { Usuario } from '../../../../models/usuario';
import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';

//importamos componente de rutas de angular 
import { Router } from '@angular/router';
import { FirestoreService } from '../../../shared/services/firestore.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //input de la contraseña para que no se vean los caracteres
  hide = true;

  constructor(
    public servicioAuth: AuthService,
    public serviceFirestore: FirestoreService,
    public ServicioRutas: Router
  ){}



  //importar la interfaz de usuario inicializada
  usuarios: Usuario = {
    uid: '',
    email: '',
    rol: '',
    password: '',
  }

  //creamos una coleccion de usuarios tipo 'usuario' para arrays
  coleccionUsuarios: Usuario[] = []

  //funcion para el registro de nuevos usuarios
  async registrar() {
    //registro con servio de auth
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }

    const res = await this.servicioAuth.registar(credenciales.email, credenciales.password)
      //metodo then devuelve algo si esta todo bien
      .then(res => {
        alert("te registraste con exito")
        //el metodo navigate  nos redirecciona a otra vista
        this.ServicioRutas.navigate(['/iniciosesion'])
      })
      //el meotodo cath captura una falla y la devuelve cuando la promesa salga mal
      .catch(error => {
        alert("hubo un error al registrar un nuevo usuario :( \n" + error)
        console.log(error)
      })

    const uid = await this.servicioAuth.obtenerUID();
    this.usuarios.uid = uid; 
    //lamamos a la funcion para ejecutarla
    this.guardarUsuario();
    this.limpiarInputs();
  }

  async guardarUsuario() {
    this.serviceFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
      .then(res => {
        console.log(this.usuarios)
      })
      .catch(err => {
        console.log("error => " + err)
      })


  }

  //funcion para limpiar inputs
  limpiarInputs() {

    //en la constante inputs llamamos los atributos y los inicializamos vacios
    const inputs = {
      email: this.usuarios.email = '',
      password: this.usuarios.password = '',
      uid: this.usuarios.uid = '',
      rol: this.usuarios.rol = '',
    }
  }
}