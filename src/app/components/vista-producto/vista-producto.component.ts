import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vista-producto',
  imports: [RouterLink, CommonModule],
  templateUrl: './vista-producto.component.html',
  styleUrl: './vista-producto.component.css'
})
export class VistaProductoComponent {

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


