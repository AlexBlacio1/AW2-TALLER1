import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-add-producto',
  imports: [FormsModule],
  templateUrl: './add-producto.component.html',
  styleUrl: './add-producto.component.css'
})
export class AddProductoComponent {

  id: any
  nombre: any
  descripcion: any
  precio: any
  imagen: any

  item:any

  servicio= inject(ProductoService)
  ruta = inject(ActivatedRoute)

  editar(formulario: any) {
    this.servicio.putProductos(formulario.value).subscribe()
  }

  ngOnInit() {
    this.ruta.params.subscribe(p => {
      const idProducto = p["idProducto"];
      if (idProducto) {
        this.servicio.getUnicoProducto(idProducto).subscribe(producto => {
          this.item = producto;
          this.id = this.item.id;
          this.nombre = this.item.nombre;
          this.descripcion = this.item.descripcion;
          this.precio = this.item.precio;
          this.imagen = this.item.imagen;
        });
      } else {
        console.error('ID del producto no encontrado en la ruta');
      }
    });
  }}