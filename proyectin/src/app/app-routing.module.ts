import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './modules/autentificacion/pages/registro/registro.component';

const routes: Routes = [
  {path:"",component:RegistroComponent},
//ruta perezosa
//ruta que nos vincula al modulo de inicio y todo su contenido 
//loadChildren: indica que habra una ruta hija
//.then funcion asincronica tipo promesa
{
  path:"",loadChildren:()=>import('./modules/autentificacion/AutentificacionModule').then(m=>m.AutentificacionModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

