import { Component, inject } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  servicio = inject(EmpleadoService); 
  empleados: any;

  
  ngOnInit(){
    this.servicio.getEmpleado().subscribe( e =>{
      this.empleados = e
    } )
   }

}
