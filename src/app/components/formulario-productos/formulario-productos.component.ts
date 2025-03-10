import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-productos',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-productos.component.html',
  styleUrl: './formulario-productos.component.css'
})
export class FormularioProductosComponent {

  id: any;
  nombre: any;
  descripcion: any;
  precio: any;
  imagen: any;

  productos: any;
  registroExitoso: boolean = false;

  servicio = inject(ProductoService);

  guardar(formulario: any) {
    if (formulario.valid) {
      console.log(formulario.value);
      this.servicio.postProductos(formulario.value).subscribe(() => {
        this.registroExitoso = true;

        setTimeout(() => {
          this.registroExitoso = false;
        }, 3000);

        formulario.resetForm();
      });
    }
  }

  ngOnInit() {
    this.servicio.getProductos().subscribe(p => {
      this.productos = p;
      this.productos = Object.values(this.productos);
    });
  }
}
