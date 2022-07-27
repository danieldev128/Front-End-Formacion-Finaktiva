import { Component, OnInit, Input } from '@angular/core';
import { HttpClient,HttpResponse} from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { map } from 'rxjs';

@Component({
  selector: 'app-gestor-productos',
  templateUrl: './gestor-productos.component.html',
  styleUrls: ['./gestor-productos.component.scss'],


})
export class GestorProductosComponent implements OnInit {

  prueba: string = "hola soledad"



  constructor(public http:HttpClient, public dialog: MatDialog) {
    this.getData();
  }

  title = 'angular-facturacion-tienda';
  searchText: any;
  products: Array<any> = []
  jsonData: any;
  url : string = "https://localhost:44350/api/Producto/EditarProducto?idProducto=";

  public productoEdit!:any;
  getData(){
    this.http
    .get('https://localhost:44350/api/Producto/ObtenerProducto')
    .subscribe((response: any)=>{
      this.products = JSON.parse(JSON.stringify(response)).data
      //console.log(this.products)


    });


  }



   getDataById(id:number):any{
    let productoByIdR
    this.http
    .post(this.url +  id,"" )
    .subscribe((response: any)=>{
      this.productoEdit = JSON.parse(JSON.stringify(response)).data
      productoByIdR = this.productoEdit
      return productoByIdR

    });

  }




  ngOnInit(): void {
  }
  openDialog(): void{
    console.log('Hola');
    const dialogRef = this.dialog.open(AgregarProductoComponent,{width: '500px',
    height: '450px',
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
  openEditarDialog(id: number){
    this.getDataById(id)
    console.log(id);
    this.productoEdit
    const dialogRef = this.dialog.open(EditarProductoComponent,{ width:'500px',
    height:'500px',
    data: ""
  });

  }

}
