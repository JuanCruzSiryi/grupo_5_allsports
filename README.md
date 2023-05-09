# ALL-SPORTS

## Guia para ejecutar el proyecto

1. ### Creación de la base de datos
En la carpeta db se pueden encontrar los scripts para crear las tablas y poblar la base de datos respectivamente:

```
* all_sports_db_creation.sql
* insert_data.sql
```

_**Nota: Recuerde configurar el usuario y la contraseña de su base de datos en el archivo \src\database\config\config.js_

2. ### Instalación de paquetes
Ejecute el siguiente comando para instalar los paquetes requeridos en el proyecto
```
>> npm install
```
3. ### Puesta en marcha del servidor
Ejecute el siguiente comando para poner en marcha el proyecto. 

```
>> npm run dev
```

Recuerde que el proyecto se ejecuta en http://localhost:3005/


## Descripción del proyecto

- Descripción de la oferta de productos: Tienda Deportiva. Ofrecemos la venta de productos que incluye ropa deportiva, accesorios y calzados. El nombre será ALL SPORTS.

- Descripción del público: Público en general.

- Descripción de los integrantes del equipo: 

    1.	Leandro López, 45 años, Analista en sistemas informáticos, hoy trabajo como gerente de distribución y logística. Espero con este equipo aprender, crecer y desarrollar juntos un ecommerce que podamos mostrar con orgullo como nuestra carta de presentación.

    2.  Juan Cruz Siryi, 24 años, Contador Público. Actualmente trabajando como Administrador en una empresa distribuidora de pollos. Desarrollando el curso de Full Stack Developer de Digital House. Ansioso de llevar a cabo el proyecto de ecommerce junto a mi equipo de trabajo.

    3.	Maximiliano Sio, 28 años, Ingeniero Industrial. Actualmente trabajo como Asesor Técnico Comercial en Bridgestone. Ansioso de aprender de este nuevo mundo con compañeros para crecer profesional y personalmente.

    4.	Danilo Burbano, 26 años, Ingeniero Electrónico, habilidades de investigación en inteligencia artificial, robótica y control, experiencia como ingeniero de pruebas,  experiencia en desarrollo con c++, c#, python, JavaScript, desarrollo de aplicaciones de realidad mixta en Unity, actualmente desempeño el cargo de desarrollador de software. Me apasiona continuar aprendiendo y proponerme nuevos retos.


- Agregar listado en README.md con 5 sitios de referencia y por qué fueron elegidos

    Sitio: https://www.dexter.com.ar/ : nos gustó la facilidad y la simplicidad de la página. El potencial cliente tiene fácil accesibilidad para ver las secciones. Mucha claridad a la hora de ver y conocer los productos.

    Sitio: https://www.adidas.com.ar/ : buscamos una marca líder a nivel mundial y poder copiar e imitar los estándares de diseño de una gran página.

    Sitio: https://www.cristobalcolon.com/ : nos gustó la estructura de la página. Más precisamente el filtro de marcas. Un integrante conoce el rubro y sabe el alto nivel de ventas que tiene a través de dicha página.

    Sitio: https://www.reverpass.com/ : uno de los integrantes trabajó con dicha empresa, teniendo experiencia en ventas y conociendo del rubro. La página ofrece sencillez para el potencial cliente, sin generar demasiadas dificultades.

    Sitio: https://ar.puma.com/ : una página que notamos a simple vista la gran variedad de colores. Lo tomamos de referencia para evitar ese tipo de diseño, procurando uno más sobrio con respecto a la gama de colores. 
    
- Wireframe digital o analógico con:

    Home -> https://wireframe.cc/4PBIAg -> - PC
    
    Detalle de producto -> https://wireframe.cc/MS6nap - PC
    
    Carrito de compras -> https://wireframe.cc/djhWky - PC
    
    Formulario de registro -> https://wireframe.cc/DKfd21 - PC
    
    Formulario de login -> https://wireframe.cc/4TzMc0 - PC
    
    Creamos la carpeta WIREFRAMES para incluir el contenido.
    
- Opcional: boceto o diseño del sitio con:

    Logo: contiene una imagen de un zorro y el nombre de nuestro ecommerce “ALL SPORTS”
  
    Colores de logo: gama de azules con negro y detalles en naranja son de nuestras preferencias inicialmente. El azul crea confianza y el naranja refleja entusiasmo y éxito. Agregamos una imagen de un zorro, para crear un logo diferente y distintivo.
    
    Colores en la página: parte superior con texto rotativo en color intenso (azul, naranja o negro, a definir), seguiremos usando la gama del azul y naranja, pero en todos claros, para el resto de la página.
    
    Tipografías: en construcción. Ideas: Open Sans, Roboto.
    
    Creamos la carpeta DESIGN para incluir el contenido.
    
LINK DE TRELLO SPRINT 1: https://trello.com/b/3XxBkR9M/sprint-1

LINK DE TRELLO SPRINT 2: https://trello.com/b/w4nUES3c/sprint-2

LINK DE TRELLO SPRINT 3: https://trello.com/b/DPHmEn5d/sprint-3

LINK DE TRELLO SPRINT 4: https://trello.com/b/8H9GEGCu/sprint-4

LINK DE TRELLO SPRINT 5: https://trello.com/b/2nm1hSAH/sprint-5

LINK DE TRELLO SPRINT 6: https://trello.com/b/kStBYM7N/sprint-6

LINK DE TRELLO SPRINT 7: https://trello.com/b/IflQUGr8/sprint-7

LINK DE TRELLO SPRINT 8: https://trello.com/b/cPQ2GBFt/sprint-8


GUÍA DE COLORES Y FUENTES:

BACKGROUND:

    HEADER & FOOTER -> #225be0

    MAIN -> linear-gradient(to right, rgb(174, 189, 227), rgb(187, 159, 148));

    REGISTER & LOGIN BUTTON -> linear-gradient(to right, rgb(2, 2, 75), rgb(5, 5, 150));

SHADOW:

    IMG, CART -> blueviolet
    
FONT-FAMILY (ALL): ROBOTO

FONT-SIZE TITLE: 20px

FONT-SIZE SUBTITLE: 18px

FONT-SIZE: 12px

GUÍA DE COLORES Y FUENTES:

BACKGROUND:

    HEADER & FOOTER -> #225be0

    MAIN -> linear-gradient(to right, rgb(174, 189, 227), rgb(187, 159, 148));

    REGISTER & LOGIN BUTTON -> linear-gradient(to right, rgb(2, 2, 75), rgb(5, 5, 150));

SHADOW:

    IMG, CART -> blueviolet
    
FONT-FAMILY (ALL): ROBOTO

FONT-SIZE TITLE: 20px

FONT-SIZE SUBTITLE: 18px

FONT-SIZE: 12px

*LISTA DE PASOS PARA CREAR LA BASE DE DATOS*
1. Abrir script nuevo en dbeaver
2. Ejecutar script all_sports_db_creation
3. Ejecutar script insert_data