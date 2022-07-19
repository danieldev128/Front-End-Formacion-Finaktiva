import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse} from '@angular/common/http'

@Component({
  selector: 'app-gestor-productos',
  templateUrl: './gestor-productos.component.html',
  styleUrls: ['./gestor-productos.component.scss']
})
export class GestorProductosComponent implements OnInit {

  constructor(public http:HttpClient ) {
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






}
