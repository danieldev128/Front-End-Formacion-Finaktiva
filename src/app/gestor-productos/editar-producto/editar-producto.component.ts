import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductoI } from 'src/app/modelos/producto.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss']

})
export class EditarProductoComponent implements OnInit {
  productoI! : ProductoI;
  productoForm = new FormGroup({
    idProducto: new FormControl(this.data.idProducto),
    nombreProducto: new FormControl(this.data.nombreProducto, Validators.required,),
    descripcionProducto: new FormControl(this.data.descripcionProducto, Validators.required),
    cantidad: new FormControl(this.data.cantidad, Validators.required),
    precioProducto: new FormControl(this.data.precioProducto, Validators.required),
    disponible: new FormControl()
  })


  constructor(public dialogRef: MatDialogRef<EditarProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,public api: ApiService) {

      console.log(data);

    }

  ngOnInit(): void {
  }
  public checkbox: boolean = this.data.disponible;

  checkClick(val: any){
    this.checkbox = !val;
    console.log(this.checkbox);

  }


  onUpdate(form: any){
    if(form.nombreProducto == null || form.descripcionProducto == null || form.precioProducto == null){
      console.log("Falta campos por llenar");
    }else{
      this.inMayus();
       console.log("apiEditar");
       console.log(form);
       this.api.editarProducto(<ProductoI>form).subscribe(data =>{
        console.log(data)
        if(data.code == "200"){
          //this.showModalDone();
          alert("Registro hecho con exito")
          this.dialogRef.close();
        }else{
          this.showModaError();

        }
       })
    }
  }
  inMayus(){
    this.productoI = <ProductoI>this.productoForm.value;
    console.log(this.productoI)
    this.productoI.nombreProducto = this.productoI.nombreProducto.toUpperCase();
    this.productoI.descripcionProducto = this.productoI.descripcionProducto.toUpperCase();
    return this.productoI
  }

  cleanForm(){
    this.productoForm.reset();
  }

  showModaError(){
    Swal.fire({
      icon: 'error',
      title: 'Ups...',
      text: 'Ocurrio un error'
    })

  }
  showModalDone(){
    Swal.fire(
      'Registro añadido con éxito'
    )


    }

}
