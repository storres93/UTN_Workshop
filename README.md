# Quinto ejercicio
## Configuracion de babel
Ya tenemos babel andando en nuestro proyecto, pero en particular queremos agregarle todos los presets(como va a transpilar) en un archivo separado de configuracion. Para babel este es el ".babelrc". Por eso le agregaremos los presets que ya instalamos dentro de este archivo como:

```
{
  "presets": ["es2015"]
}
```

Tambien queremos que babel entienda la sintaxis de React por eso le instalaremos un preset de react llamado "babel-preset-react" de la misma manera que previamente instalamos dependencias y se lo agregaremos al .babelrc de la misma manera que agregamos el preset de es2015

## Buildeo continuo
Para no tener que hacer build cada vez que realizamos un cambio sobre nuestro codigo, es conveniente informale a webpack que "mire" los cambios realizados sobre archivos y los bundlee/transpile cuando estos cambien.

Para esto vamos a usar el flag `--watch` de webpack.

Entonces en nuestro script de watch deberemos agregar el watch a webpack tal que nos quede:

```
{
	...
	"scripts": {
		...
		"watch": "npm run clean && webpack --watch",
		...
	}
}
```

## Servidor
Por ahora estuvimos levantando desde el filesystem nuestro archivo index.html. En la realidad nadie cuando se entra a una aplicacion web el usuario no levanta un archivo de su computadora, sino que directamente se lo entrega un servidor.

Por esto vamos a iniciar un servidor que directamente levante nuestra aplicacion en un puerto para que no tengamos que acceder por medio de filesystem y que el usuario se abstraiga de como es la estructura del proyecto.

Webpac nos provee un modulo de servidor soportado por los desarrolladores para usar en desarrollo, el "webpack-dev-server". Lo instalaremos como hizimos en los ejercicios anteriores.

Para su configuracion podemos directamente usar el webpack.config.js agregando la configuracion para el devServer

```
{
	...
	devServer: {
		contentBase: './public'
	}
}
```

Indicar el contentBase nos permite decirle al webpack-dev-server donde se alojan nuestros archivos principales y desde donde empezar a servir nuestra aplicacion(En este caso es el index.html).

Luego deberemos incluir nuestro script de "start" a nuestro package.json

```
{
	...
	"scripts": {
		...
		"start": "webpack-dev-server",
		...
	}
}
```

Luego simplemente desde la consola ejecutamos `npm start` y deberiamos poder acceder a `http://localhost:8080` y que este servido nuestro archivo index.html

## Hot Module Replacement
Para no tener que recargar cada vez que hacemos un cambio sobre un archivo, nos conviene aplicar HMR (Hot Module Replacemente) que basicamente crea un proxy en el cliente con el servidor donde se recargan unicamente modulos particulares cuando se encuentra un cambio, y asi ahorrarnos tener que recargar manualmente la pagina.

Webpack-dev-server esta pensado desde un principio para poderse correr con HMR por esto la configuracion que vamos a tener que realizar va a ser minima. Primero debemos informarle a webpack-dev-server que queremos utilizar HMR, esto se puede lograr de dos maneras: O seteamos la propiedad "hot" de nuestro devServer en true, o simplemente le pasamos un flag "--hot" al script de start.

Ademas vamos a tener que informarle a webpack que vamos a utilizar esta configuracion, que basicamente es un plugin.

Por eso vamos a agregar una nueva propiedad a nuestro webpack.config.js que sera "plugins"

```
{
	...
	"plugins": [
		new webpack.HotModuleReplacementPlugin()
	]
}
```

Ademas ahora deberemos informar que nuestra entrada de archivos no proviene unicamente de los archivos fuentes sino tambien del dev server por eso modificamos la propiedad entry de la siguiente manera:

```
{
	...
	"entry": [
		"webpack-dev-server/client?http://localhost:8080",
		"./src/index.js",
	]
}
```

A todo esto, podemos (y es recomendable) agregar un preset a babel para que cuando transpile nuevos cambios los haga unicamente con los modulos de react que cambiaron. Para esto existe "babel-preset-react-hmre" que instalaremos y configuraremos como se hizo en los presets anteriores.

Si no llegas a terminar este ejercicio podes checkoutear la branch 1.5