import { Injectable } from '@angular/core';

//cloud firestore: accedemos a las colecciones
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from '../../../models/usuario';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private database: AngularFirestore) {
    /* Usuarios collection va a definir la nueva coleccion "usuarios" que estara en nuestra base de datos */
    this.usuarioCollection = this.database.collection<Usuario>('usuarios')
  }


  agregarUsuario(usuario: Usuario, id: string) {
    
         
    
    return new Promise(async (resolve, reject) => {
      //bloque try encapsula la logica resuelta 

      try {
        usuario.uid = id;
        /*
        const resultado = coleccion de usuario, envia como numero de documento el uid 
        y setea la informacion que ingresamos en el formulario de registro
        */ 

        const resultado = await this.usuarioCollection.doc(id).set.(usuario)

        resolve(resultado)
      } catch (error){
        reject (error)
      }
    })
  }
}