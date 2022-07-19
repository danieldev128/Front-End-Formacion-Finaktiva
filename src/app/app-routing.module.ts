import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestorProductosComponent } from './gestor-productos/gestor-productos.component';

const routes: Routes = [
  {
    path:'gestorProductos', //
    component: GestorProductosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
