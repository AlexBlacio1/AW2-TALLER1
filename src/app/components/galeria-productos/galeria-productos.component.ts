import { Component, inject } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-galeria-productos',
  imports: [CommonModule, RouterLink],
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

  ngOnInit(){
    this.servicio.getProductos().subscribe(p=>{
      this.productos= p
      this.productos= Object.values(this.productos)
    })
  }

  eliminar(id:any){
    this.servicio.deleteProductos(id).subscribe()
  }
}
