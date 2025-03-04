import { Component, inject } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';  // Asegúrate de importar Router
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  servicio = inject(ProductoService);
  router = inject(Router); 

  correo: any;
  nombre: any;
  telefono: any;

  guardar(formulario: any) {
    alert('¡Suscripción exitosa!');

    

    this.servicio.postProductos(formulario.value).subscribe(
      response => {
        console.log('Formulario enviado con éxito:', response);
      },
      error => {
        console.error('Error al enviar formulario:', error);

      }
    );
  }

}
