import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { map } from 'rxjs';
import { ApiService } from '../servicios/api/api.service'
import { Route } from '@angular/router';

@Component({
  selector: 'app-gestor-productos',
  templateUrl: './gestor-productos.component.html',
  styleUrls: ['./gestor-productos.component.scss'],


})
export class GestorProductosComponent implements OnInit {





  constructor(public http: HttpClient, public dialog: MatDialog, public apiService: ApiService) {
    this.getData();
  }

  title = 'angular-facturacion-tienda';
  searchText: any;
  products: Array<any> = []
  jsonData: any;

  public productoEdit!: any;
  getData() {
    this.http
      .get('https://localhost:44350/api/Producto/ObtenerProducto')
      .subscribe((response: any) => {
        this.products = JSON.parse(JSON.stringify(response)).data
        //console.log(this.products)
      });
  }

  ngOnInit(): void {
  }
  openDialog(): void {
    console.log('Hola');
    const dialogRef = this.dialog.open(AgregarProductoComponent, {
      width: '500px',
      height: '500px',
      data: 'Ingreso de producto'
    });
      dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });

    dialogRef.afterClosed().subscribe(res => {
        console.log(res);
        console.log('Formulario cerrado');
        this.delay(1000);
        window.location.reload();

    })
  }

  openEditarDialog(id: number) {
    console.log(id);
    this.apiService.retornarProducto(id).subscribe(data => {
      this.productoEdit = (JSON.parse(JSON.stringify(data)).data)
      const dialogRef = this.dialog.open(EditarProductoComponent, {
        width: '500px',
        height: '500px',
        data: this.productoEdit

      });

      dialogRef.afterClosed().subscribe(res =>{
          console.log(res);
          window.location.reload();

      });

    });

  }

    delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

}
