import { Injectable } from '@angular/core';
import {ProductoI} from '../../modelos/producto.interface';
import {ResponseI} from '../../modelos/response.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "https://localhost:44350/api/Producto/AgregarProducto"
  urlRetornarProducto: string ="https://localhost:44350/api/Producto/BuscarProducto?idProducto="
  urlEditarProducto: string = "https://localhost:44350/api/Producto/EditarProducto"
  productoResponse: any;

  constructor(private http:HttpClient) { }

  ingresarProducto(form:any):Observable<ResponseI>{

    let direccion = this.url
    return this.http.post<ResponseI>(direccion, form);
  }

  retornarProducto(id:number):Observable<ProductoI>{

    let productoResponse: any
    productoResponse = this.http
    .post(this.urlRetornarProducto +  id,"" )
     return productoResponse
  }
  editarProducto(formEdit:any):Observable<ResponseI>{


     return this.http.post<ResponseI>(this.urlEditarProducto,formEdit);




  }


}
