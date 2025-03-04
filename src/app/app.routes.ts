import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Component } from '@angular/core';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { DetallesEmpleadoComponent } from './pages/detalles-empleado/detalles-empleado.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { Error404Component } from './pages/error404/error404.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'personal', component: EmpleadosComponent},
    {path: 'personal/:idEmpleado', component: DetallesEmpleadoComponent},
    {path: 'suscribe', component: ProductoComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'contactos', component: ContactosComponent},
    {path: 'nosotros', component: NosotrosComponent},

    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: '**', component: Error404Component}
];
