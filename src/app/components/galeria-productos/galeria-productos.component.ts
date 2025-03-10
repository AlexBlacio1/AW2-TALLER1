import { Component, inject } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarritoComponent } from '../carrito/carrito.component';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-galeria-productos',
  imports: [CommonModule, CarritoComponent],
  templateUrl: './galeria-productos.component.html',
  styleUrl: './galeria-productos.component.css'
})
export class GaleriaProductosComponent {

  id: any
  nombre: any
  descripcion: any
  precio: any
  imagen: any

  productos:any

  servicio = inject(ProductoService)
  carritoService = inject(CarritoService);

  ngOnInit() {
    this.servicio.getProductos().subscribe(p => {
      this.productos = Object.values(p);
    });
  }

  agregarAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto);
  }
}