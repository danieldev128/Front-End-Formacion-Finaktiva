import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SidenavComponent } from './componets/sidenav/sidenav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { GestorProductosComponent } from './gestor-productos/gestor-productos.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule} from '@angular/common/http';
import { EditarProductoComponent } from './gestor-productos/editar-producto/editar-producto.component';
import { AgregarProductoComponent } from './gestor-productos/agregar-producto/agregar-producto.component';
import {MatDialogModule, MatDialog, MatDialogRef} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    GestorProductosComponent,
    EditarProductoComponent,
    AgregarProductoComponent,

  ],
  imports: [

    MatDialogModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]

})
export class AppModule { }
