import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './modules/autentificacion/pages/registro/registro.component';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';
import { IniciosesionComponent } from './modules/autentificacion/pages/iniciosesion/iniciosesion.component';

const routes: Routes = [
  {path:"",component:RegistroComponent},
  {path:"inicio",component:InicioComponent},
  {path:"iniciosesion",component:IniciosesionComponent},

//ruta perezosa
//ruta que nos vincula al modulo de inicio y todo su contenido 
//loadChildren: indica que habra una ruta hija
//.then funcion asincronica tipo promesa
{path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)},
{path:"",loadChildren:()=>import('./modules/productos/productos.module').then(m=>m.ProductosModule)},
{path:"",loadChildren:()=>import('./modules/autentificacion/autentificacion.module').then(m=>m.AutentificacionModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

