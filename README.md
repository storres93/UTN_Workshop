#Tercer ejercicio
La idea del tercer ejercicio es que en vez de incluir nuestras librerias por cdn's utilizar la herramienta que nos provee npm de ser un manejador de paquetes. Por esto vamos a agregar a react y react-dom como dependencias de nuestro proyecto.

Para especificar una dependencia de un proyecto se ponen en el package.json en la seccion de "Dependencies" si son dependencias requeridas para poder correr nuestro proyecto o en "devDependencies" toda dependencia que sea necesaria unicamente para desarrollar nuestro proyecto (Como babel).

Para instalar react y react-dom utilizamos

```
npm install --save react react-dom
```

Ahora para que nuestro archivo de js sepa que existe react vamos a tener que importarlo (Ya que no se agrega mas desde el index.html)

Para esto debemos agregar estas lineas al comienzo de nuestro archivo index.js

```
var React = require("react");
var ReactDOM = require("react-dom");
```

Te invitamos ahora a que hagas los cambios necesarios para poder utilizar react y react-dom como dependencias de nuestro archivo y que nuestro archivo index.html solo tenga que importar un archivo javascript.

Si no llegan a terminar esto, pueden checkoutear la branch 1.3