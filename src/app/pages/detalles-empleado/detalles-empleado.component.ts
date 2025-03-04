import { Component, inject } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalles-empleado',
  imports: [CommonModule],
  templateUrl: './detalles-empleado.component.html',
  styleUrl: './detalles-empleado.component.css'
})
export class DetallesEmpleadoComponent {

  servicio =inject(EmpleadoService)
  ruta = inject(ActivatedRoute)
  id : any;

  empleado : any;

  ngOnInit(){
    this.ruta.params.subscribe(parametro =>{
      this.id= parametro['idEmpleado']
    })
    this.servicio.getUnicoEmpleado(this.id).subscribe(e =>{
      console.log(e);
      this.empleado = e
    })
  }

}
