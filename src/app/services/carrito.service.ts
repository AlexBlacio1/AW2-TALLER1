import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: any[] = [];
  private carritoSubject = new BehaviorSubject<any[]>([]);

  carrito$ = this.carritoSubject.asObservable();

  agregarProducto(producto: any) {
    const productoExistente = this.carrito.find(p => p.id === producto.id);
    if (productoExistente) {
      productoExistente.cantidad++;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }
    this.carritoSubject.next(this.carrito);
  }

  actualizarCantidad(id: any, cantidad: number) {
    const producto = this.carrito.find(p => p.id === id);
    if (producto && cantidad >= 1) {
      producto.cantidad = cantidad;
    }
    this.carritoSubject.next(this.carrito);
  }

  eliminarProducto(id: any) {
    this.carrito = this.carrito.filter(producto => producto.id !== id);
    this.carritoSubject.next(this.carrito);
  }

  obtenerTotal(): number {
    return this.carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  }
  vaciarCarrito() {
    this.carrito = [];
    this.carritoSubject.next(this.carrito);
  }
}
