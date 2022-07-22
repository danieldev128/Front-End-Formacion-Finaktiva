import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse} from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';

@Component({
  selector: 'app-gestor-productos',
  templateUrl: './gestor-productos.component.html',
  styleUrls: ['./gestor-productos.component.scss']
})
export class GestorProductosComponent implements OnInit {

  constructor(public http:HttpClient, public dialog: MatDialog ) {
    this.getData();
  }

  title = 'angular-facturacion-tienda';
  searchText: any;
  products: Array<any> = []
  jsonData: any;

  getData(){
    this.http
    .get('https://localhost:44350/ObtenerProducto')
    .subscribe((response: any)=>{
      this.products = JSON.parse(JSON.stringify(response)).data
      console.log(this.products)


    });


  }




  ngOnInit(): void {
  }
  openDialog(): void{
    console.log('Hola');
    const dialogRef = this.dialog.open(AgregarProductoComponent,{width: '1024px',
    height: '300px',
    data:'Ingreso de producto'});
    dialogRef.afterClosed().subscribe(res =>{
      console.log(res);
    });

    dialogRef.afterClosed().subscribe(res =>{

      console.log(res);

      if(res){
        console.log('Delete this file')
      }
    })
  }
  openEditarDialog(){
    console.log('Hola')
    const dialogRef = this.dialog.open(EditarProductoComponent,{ width:'500px',
    height:'500px',
    data:'Edicion de producto'});

  }

}
