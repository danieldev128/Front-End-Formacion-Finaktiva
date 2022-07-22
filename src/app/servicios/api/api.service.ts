import { Injectable } from '@angular/core';
import {ProductoI} from '../../modelos/producto.interface';
import {ResponseI} from '../../modelos/response.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "https://localhost:44350/AgregarProducto?"

  constructor(private http:HttpClient) { }

  ingresarProducto(form:ProductoI):Observable<ResponseI>{

    let direccion = this.url
    return this.http.post<ResponseI>(direccion, form)
  }


}
