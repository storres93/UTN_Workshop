#Segundo ejercicio
La idea del segundo ejercicio es que en vez de poner todo nuestro codigo en un index.html tengamos nuestro codigo por separado y que "algo" se encargue de bundlearlo o transpilarlo para que lo consumamos.
Para esto vamos a utilizar webpack que lo pueden instalar de la siguiente manera:

```
npm install --save webpack
```

Recomendamos instalar la version 2.x.x de webpack que va a ser con la que estaremos trabajando en este workshop ya que la 3.x.x es todavia experimental.

Ya teniendo esto vamos a crear los scripts que permitan a npm saber que queremos hacer.
En particular vamos a crear dos "build" y "clean". Build se encargara de bundlear y transpilar nuestro codigo, mientras que clean se encargara de limpiar el bundle pasado.

Generalmente se utiliza un directorio aparte para poner todo el codigo bundleado, es muy comun ver una carpeta "dist" que deseamos ignorar desde git ya que van a ser archivos autogenerados y no es algo que queramos en nuestro repositorio.

Para decirle a webpack que queremos que procese un archivo y lo deje en algun lado se lo podemos decir asi:

```
webpack <archivo origen> <archivo destino>
```

Te invitamos ahora a que hagas los scripts de "build" y "clean" en el package.json que se especifican de esta manera

```
{
	...
	"scripts" : {
		"nombre de script": "que corre el script"
	}
	...
}
```

Y luego que muevas el codigo javascript realizado en el ejercicio anterior en un archivo aparte que sea bundleado por webpack y consumido por tu index html como si fuese un script externo.

Si no llegan a terminar esto, pueden checkoutear la branch 1.2