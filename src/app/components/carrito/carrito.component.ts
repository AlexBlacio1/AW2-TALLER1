import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule, FormsModule ],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carrito: any[] = [];
  subtotal: number = 0;
  iva: number = 0;
  total: number = 0;
  IVA_RATE = 0.15;

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.carritoService.carrito$.subscribe(productos => {
      this.carrito = productos.map(producto => ({
        ...producto,
        precio: producto.precio || 0,
        cantidad: producto.cantidad || 1,
        iva: producto.precio * 0.15,
        subtotal: producto.precio * producto.cantidad,
        total: (producto.precio * producto.cantidad) + (producto.precio * 0.15 * producto.cantidad)
      }));
      this.calcularTotales();
    });
  }
  

  actualizarCantidad(id: any, cantidad: number) {
    this.carritoService.actualizarCantidad(id, cantidad);
    this.calcularTotales();
  }

  eliminarDelCarrito(id: any) {
    this.carritoService.eliminarProducto(id);
    this.calcularTotales();
  }

  calcularTotales() {
    this.subtotal = this.carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
    this.iva = this.subtotal * this.IVA_RATE;
    this.total = this.subtotal + this.iva;
  }
  comprar() {
    // Lógica para manejar la compra
    // Ejemplo: Redirigir a una pantalla de confirmación o procesar el pago
    console.log('Compra realizada', this.carrito);
    alert('Gracias por tu compra!');
  
    // Si deseas vaciar el carrito después de comprar
    this.carritoService.vaciarCarrito();
    this.calcularTotales(); // Recalcular totales después de vaciar el carrito
  }
}