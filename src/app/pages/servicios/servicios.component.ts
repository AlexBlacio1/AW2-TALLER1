import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-servicios',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  servicios = [
    {
      "titulo": "Reparación de dispositivos electrónicos",
      "descripcion": "Soluciones rápidas y efectivas para tus dispositivos. Ya sea que tu teléfono, computadora o tablet tenga una pantalla rota, batería dañada, problemas de software o fallas en el sistema, nuestros técnicos especializados se encargarán de diagnosticar y reparar el problema de manera eficiente. Utilizamos herramientas avanzadas y repuestos originales para garantizar que tu dispositivo funcione como nuevo."
    },
    {
      "titulo": "Asesoría en hardware y software",
      "descripcion": "Te ayudamos a elegir los mejores componentes y programas para tu computadora o dispositivo móvil. Desde la selección de procesadores, placas base, memorias RAM, hasta la instalación de sistemas operativos, programas antivirus, software especializado y configuraciones personalizadas. Nuestro objetivo es ofrecerte la mejor recomendación según tus necesidades, presupuesto y expectativas de rendimiento."
    },
    {
      "titulo": "Personalización de teclados mecánicos",
      "descripcion": "Crea el teclado de tus sueños con nuestros expertos. Ofrecemos una amplia gama de switches, keycaps, y luces RGB personalizables para que tu teclado no solo sea funcional, sino también único. Desde teclados silenciosos hasta opciones de alto rendimiento para gamers o profesionales, nuestro equipo te ayudará a diseñar y ensamblar un teclado que se ajuste a tu estilo y necesidades."
    },
    {
      "titulo": "Soporte técnico y mantenimiento",
      "descripcion": "Mantenemos tus dispositivos en óptimas condiciones para que no pierdas productividad. Realizamos diagnósticos y mantenimientos preventivos, eliminando virus, actualizando sistemas y programas, limpiando físicamente tus equipos, mejorando su rendimiento y garantizando que todo funcione de manera fluida. Nuestro soporte técnico está disponible para resolver cualquier problema, ya sea a distancia o en persona."
    },
    {
      "titulo": "Recuperación de datos",
      "descripcion": "Rescatamos tu información perdida de discos duros dañados, memorias USB, tarjetas SD y otros dispositivos de almacenamiento. Ya sea por corrupción de archivos, formateos accidentales o fallas físicas del dispositivo, contamos con las herramientas y el conocimiento necesario para intentar recuperar tus datos importantes de manera segura y eficiente. Nuestro objetivo es brindarte tranquilidad y ayudarte a recuperar tu información crítica."
    },
    {
      "titulo": "Instalación y configuración de redes",
      "descripcion": "Configuramos tu red para un mejor rendimiento, estabilidad y seguridad. Desde la instalación de routers y switches hasta la configuración de redes inalámbricas y cableadas, nos aseguramos de que tu red funcione de manera óptima. También implementamos medidas de seguridad para proteger tus datos y dispositivos, y optimizamos el rendimiento de tu conexión a Internet, reduciendo tiempos de latencia y mejorando la cobertura en todo el hogar o la oficina."
    },
    {
      "titulo": "Actualización de software y drivers",
      "descripcion": "Mantenemos tu equipo actualizado con las últimas versiones de software, controladores y parches de seguridad. Realizamos un análisis exhaustivo para asegurarnos de que tu sistema operativo, programas y controladores estén siempre al día, lo que mejora la seguridad, el rendimiento y la compatibilidad de tu equipo. Te ayudamos a evitar problemas relacionados con la incompatibilidad de software y te mantenemos protegido contra vulnerabilidades conocidas."
    },
    {
      "titulo": "Optimización de rendimiento de computadoras",
      "descripcion": "Mejoramos la velocidad y eficiencia de tu PC o laptop. Nuestro equipo realiza un diagnóstico completo para identificar los cuellos de botella en tu sistema y aplicamos ajustes, como la desfragmentación de discos, la limpieza de archivos temporales, la optimización de la configuración de inicio y la actualización de controladores. También podemos recomendar mejoras de hardware, como más memoria RAM o un disco duro SSD, para maximizar el rendimiento de tu equipo."
    },
    {
      "titulo": "Venta de repuestos y accesorios",
      "descripcion": "Encuentra los mejores componentes y accesorios para tu equipo. Ofrecemos una variedad de repuestos de alta calidad, como procesadores, tarjetas gráficas, placas base, discos duros, fuentes de alimentación, y más. Además, contamos con una gama de accesorios como teclados, ratones, monitores, cables, y mochilas para que puedas equipar tu computadora o dispositivo móvil con todo lo necesario. Todos nuestros productos son de marcas reconocidas y garantizados."
    },
    {
      "titulo": "Ensamblaje de PC a medida",
      "descripcion": "Construimos tu computadora ideal según tus necesidades específicas, ya sea para juegos, trabajo profesional, o uso personal. Nuestros expertos en hardware te guiarán en la selección de los mejores componentes, adaptados a tu presupuesto y expectativas de rendimiento. Desde la elección del procesador y la tarjeta gráfica, hasta la instalación y configuración de todos los componentes, nos aseguramos de que tu PC funcione perfectamente para cualquier tarea que necesites realizar."
    }
  ]
  
}