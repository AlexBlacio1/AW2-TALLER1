import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Component } from '@angular/core';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { DetallesEmpleadoComponent } from './pages/detalles-empleado/detalles-empleado.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { Error404Component } from './pages/error404/error404.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { GaleriaProductosComponent } from './components/galeria-productos/galeria-productos.component';
import { AddProductoComponent } from './components/add-producto/add-producto.component';
import { FormularioProductosComponent } from './components/formulario-productos/formulario-productos.component';
import { GestionProductosComponent } from './components/gestion-productos/gestion-productos.component';
import { LoginComponent } from './pages/login/login.component';
import { loginGuard } from './guards/login.guard';
import { CarritoComponent } from './components/carrito/carrito.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'personal', component: EmpleadosComponent},
    {path: 'personal/:idEmpleado', component: DetallesEmpleadoComponent},
    {path: 'productos/:idProducto', component: AddProductoComponent},
    {path: 'suscribe', component: ProductoComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'contactos', component: ContactosComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'productos', component: GaleriaProductosComponent},
    {path: 'addproducto', component: GestionProductosComponent, canActivate:[loginGuard]},
    {path: 'login', component:LoginComponent},
    { path: 'carrito', component: CarritoComponent },

    { path: '', component: HomeComponent, pathMatch: 'full' },
    {path: '**', component: Error404Component}

    
];
