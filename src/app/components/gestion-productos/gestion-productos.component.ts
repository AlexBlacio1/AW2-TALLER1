import { Component } from '@angular/core';
import { AddProductoComponent } from '../add-producto/add-producto.component';
import { FormularioProductosComponent } from '../formulario-productos/formulario-productos.component';
import { VistaProductoComponent } from '../vista-producto/vista-producto.component';


@Component({
  selector: 'app-gestion-productos',
  imports: [FormularioProductosComponent, VistaProductoComponent],
  templateUrl: './gestion-productos.component.html',
  styleUrl: './gestion-productos.component.css'
})
export class GestionProductosComponent {

}
