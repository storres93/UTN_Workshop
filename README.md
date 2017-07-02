# UTN Workshop
La idea de este workshop es dar una pequeña introduccion a react y a redux para que puedan aplicarlo en sus proyectos/ambiente laboral.

El workshop se va a dividir en 2 dias en los cuales, en el primero veremos React y en el segundo lo integraremos con Redux.

Hay una branch por ejercicio por si no llegana completarlos ya pueden empezar con el ejercicio resuelto. Estas branches estan formateadas como `dia.ejercicio`. Entonces si por ejemplo no llegan a terminar el tercer ejercicio del primer dia, simplemente pueden hacer `git checkout 1.3` y ya estara el ejercicio resuelto.

Recomendamos fuertemente de que lleguen a terminar todos los ejercicios ya que son incremenetales

#Objetivo
Nuestro objetivo principal es poder realizar una lista de todos donde un usuario pueda agregar, reordenar y borrar todos. Luego veremos como teniendo un servidor con una API REST podemos fetchear estos todos y crearlos directamente en el servidor.

#Primer ejercicio
La idea del primer ejercicio es que podemos hacer el setup basico de nuestro proyecto. Para esto correremos:

```
npm init
```
Esto nos creara nuestro package.json

Luego vamos a crear un componente simple agregando react y react-dom desde un cdn. Pueden usar los siguientes:

```
https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.js
https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.js
```

Y luego crearemos nuestro componente con
```
var rootElement = React.createElement('h1', {}, "Hola Mundo!")
ReactDOM.render(rootElement, document.getElementById('react-app'))
```

Si no llegan a terminar esto, pueden checkoutear la branch 1.1