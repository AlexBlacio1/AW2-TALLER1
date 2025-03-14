import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos = [
    {
      "id": 1,
      "nombre": "Laptop HP Victus 15",
      "descripcion": "Laptop gaming con procesador Intel Core i5 y GPU RTX 3050.",
      "precio": 850.99,
      "imagen": "https://novatecsa.com/wp-content/uploads/2024/09/HP-Victus-15-fa0033dx-5.jpg"
    },
    {
      "id": 2,
      "nombre": "Smartphone Samsung Galaxy S23",
      "descripcion": "Teléfono de alta gama con Snapdragon 8 Gen 2 y pantalla Dynamic AMOLED.",
      "precio": 999.99,
      "imagen": "https://cdn-iibnp.nitrocdn.com/VjyilAmBtWmZaLojjwWFayaMdinRRPlg/assets/images/optimized/rev-f0d6867/www.ourfriday.co.uk/image/cache/catalog/products_2023/samsung-s23-ultra-black-1-800x800.png"
    },
    {
      "id": 3,
      "nombre": "Monitor LG UltraGear 27\"",
      "descripcion": "Monitor gaming 144Hz con panel IPS y resolución 2K.",
      "precio": 349.99,
      "imagen": "https://systemarket.com.ec/wp-content/uploads/2021/04/LG-27GL650FB-ULTRAGEAR.jpg"
    },
    {
      "id": 4,
      "nombre": "Auriculares Logitech G Pro X",
      "descripcion": "Auriculares con sonido envolvente 7.1 y micrófono Blue Voice.",
      "precio": 129.99,
      "imagen": "https://cdn.idealo.com/folder/Product/6723/5/6723521/s11_produktbild_max/logitech-g-pro-x-gaming-headset.jpg"
    },
    {
      "id": 5,
      "nombre": "Teclado Mecánico Corsair K70",
      "descripcion": "Teclado RGB con switches Cherry MX Red y chasis de aluminio.",
      "precio": 149.99,
      "imagen": "https://altagamadigital.com/wp-content/uploads/2023/10/0-8-600x600-3.jpg"
    },
    {
      "id": 6,
      "nombre": "Mouse Razer DeathAdder V2",
      "descripcion": "Mouse ergonómico con sensor óptico de 20,000 DPI.",
      "precio": 69.99,
      "imagen": "https://ndstore.ec/files/images/productos/1699401016-mouse-de-juego-razer-deathadder-v2-mini-negro-0.jpg"
    },
    {
      "id": 7,
      "nombre": "Tablet iPad Air (5ª Gen)",
      "descripcion": "Tablet con chip M1 y pantalla Liquid Retina de 10.9\".",
      "precio": 599.99,
      "imagen": "https://i0.wp.com/www.baratazo.com/baratazo/wp-content/uploads/2022/05/ipad-air-m1-256-1.jpg?fit=1500%2C1500&ssl=1"
    },
    {
      "id": 8,
      "nombre": "Smartwatch Apple Watch Series 9",
      "descripcion": "Reloj inteligente con sensores avanzados y pantalla Always-On.",
      "precio": 429.99,
      "imagen": "https://www.baratazo.com/baratazo/wp-content/uploads/2023/12/apple-watch-9-45mm-midnight-sport-loop-2.webp"
    },
    {
      "id": 9,
      "nombre": "Consola PlayStation 5",
      "descripcion": "Consola de nueva generación con SSD ultrarrápido y gráficos 4K.",
      "precio": 599.99,
      "imagen": "https://planetadigitalec.com/cdn/shop/files/51fM0CKG_HL._SX522_600x600.jpg?v=1717796624"
    },
    {
      "id": 10,
      "nombre": "Tarjeta Gráfica NVIDIA RTX 4090",
      "descripcion": "GPU de alto rendimiento con 24GB GDDR6X.",
      "precio": 1599.99,
      "imagen": "https://m.media-amazon.com/images/I/71EP3+gnSxL.jpg"
    }
  ]

}