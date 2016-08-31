# Golidays
  Es un [mini-demo](https://golidays.herokuapp.com) inspirado en el inbox de Gmail para gestionar las solicitudes de vacaciones de los empleados.
  
##Arquitectura
* Model: Por medio de **ExpressJS** (Framework minimalista de Node.JS) el archivo *inbox.json* es servido con los datos de los empleados y posteriormente accedido a traves de peticiones AJAX desde el lado del cliente.
* View: Mediante ExpressJS se establecen las vistas disponibles en la carpeta *views*, que son renderizadas a traves del motor de plantillas **Jade**
* Controller: Los endpoints (peticiones URL) de la aplicación son manejados por medio del enrutador ubicado en la carpeta *routes* 

##Tecnologías
 Sin embargo en el lado del cliente se puede observar un patrón MVC parecido de la siguiente manera:
 * Model: Los datos del archivo inbox.json son almacenados en el **LocalStorage** del navegador para aumentar la velocidad del sitio
 * View: En la carpeta src se encuentran todos los componentes principales de la aplicación con su correspondiente template, 
         el cual es construido por medio de la librería **yo-yo** que permite actualizar el contenido HTML usando DOM virtuales
         para hacer muy eficientes y reusables los componentes visuales del lado del cliente
 * Controller: Usando la libreria **Page** se puede establecer un enrutador del lado del cliente que permite procesar peticiones de manera
  más eficiente
  
Finalmente se utiliza un transpilador **babeljs** para poder usar la última versión del estandar *EcmaScript 2015 (ES6)* y **browserify** que permite modularizar los archivos JS para separar las responsabilidades y unificar posteriormente en compilación todos los recursos en un solo archivo Javascript (bundling). 
