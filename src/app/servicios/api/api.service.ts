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
  urlRetornarProducto: string =""

  constructor(private http:HttpClient) { }

  ingresarProducto(form:any):Observable<ResponseI>{

    let direccion = this.url
    return this.http.post<ResponseI>(direccion, form)
  }

  retornarProducto(id:number){


  }


}
