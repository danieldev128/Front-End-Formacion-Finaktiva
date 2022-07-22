import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ApiService} from '../../servicios/api/api.service'
import {ProductoI} from '../../modelos/producto.interface'

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss']
})
export class AgregarProductoComponent implements OnInit {

   productoForm = new FormGroup({
    nombreProducto : new FormControl('', Validators.required),
    descripcionProducto : new FormControl('', Validators.required),
   // cantidad : new FormControl('',Validators.required),
    precioUnitario : new FormControl('',Validators.required)


  })
  constructor(
    public dialogRef: MatDialogRef<AgregarProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string, public api:ApiService
  ) { }

  ngOnInit(): void {
  }
  onClickNo(): void{
    this.dialogRef.close();

  }

  onRegister(form:any){

    this.api.ingresarProducto(form).subscribe(data =>{
      console.log(data)

    });


  }

}
