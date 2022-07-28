import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../servicios/api/api.service'
import { ProductoI } from '../../modelos/producto.interface'
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss']
})
export class AgregarProductoComponent implements OnInit {
  productoI!: ProductoI;
  productoForm = new FormGroup({
    nombreProducto: new FormControl('', Validators.required,),
    descripcionProducto: new FormControl('', Validators.required),
    cantidad: new FormControl('', Validators.required),
    precioProducto: new FormControl('', Validators.required),
    disponible: new FormControl('',)
  })

  constructor(
    public dialogRef: MatDialogRef<AgregarProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string, public api: ApiService,

  ) { }

  ngOnInit(): void {

  }

  checkbox: boolean = true;

  checkClick(val: any) {
    this.checkbox = !val;
    console.log(this.checkbox)
  }

  onClickGuardar(): void {
    this.dialogRef.close();
    const valor = document.getElementById("disponbleCheck") as HTMLInputElement
    console.log(valor);
  }

  onRegister(form: any) {
    console.log(this.enMayus());
    console.log("apiService");
    if (this.validateValues()) {
      this.api.ingresarProducto(form).subscribe(data => {
        console.log(data.code);
        if (data.code == "200") {
          alert("Producto registrado correctamente");
          this.productoForm.reset();
        } else {
          alert("Existe un error, no se pudo registrar producto")
          this.dialogRef.close();
        }
      });
    } else {
      alert("Faltan campos por ingresar")
    }
  }

  enMayus() {
    this.productoI = <ProductoI>this.productoForm.value
    this.productoI.nombreProducto = this.productoI.nombreProducto.toUpperCase();
    this.productoI.descripcionProducto = this.productoI.descripcionProducto.toUpperCase();
    return this.productoI;
  }

  validateValues(): boolean {
    let flag: boolean = true
    if (this.productoForm.value.nombreProducto == "") {
      flag = false;
    } else if (this.productoForm.value.descripcionProducto == "") {
      flag = false;
    } else if (this.productoForm.value.cantidad == "") {
      flag = false;
    } else if (this.productoForm.value.precioProducto == "") {
      flag = false;
    }
    console.log(flag);
    return flag;
  }


}
