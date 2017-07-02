#Cuarto ejercicio
##Configuracion de webpack
Ya deberiamos tener webpack instalado y corriendo bundleando nuestro codigo.

Nuestro proximo paso va a ser agregar un archivo de configuracion a webpack asi no tenemos que mandarle todo por consola.

Para esto vamos a crear un archivo webpack.config.js donde le especificaremos a webpack todo lo que queremos que haga. Como esto se va a exportar como un modulo (para poder hacer require). Nuestro archivo tendra la siguiente estructura

```
module.exports = {

}
```

Ahora le deberemos informar a webpack, cual es el archivo raiz de nuestro program. Lo podemos hacer de la siguiente manera

```
module.exports = {
	entry: './src/index.js'
}
```

Ya teniendo esto debemos informarle a donde queremos que lanze el output de nuestro programa. Haremos uso de la libreria path, que ya viene incluida con webpack para formar lo siguiente.

```
var path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}
```

De esta manera en nuestro script de build solo deberemos informarle que ejecute `webpack` ya que este buscara el archivo de configuracion `webpack.config.js` o `webpack.config.json` desde la raiz de nuestro proyecto.

##Babel
Para poder hacer uso completo del lenguaje javascript a veces tenemos que adelantarnos a lo que esta en el momento. Es por esto que para hacer uso de es6(EcmaScript 2015) debemos usar una libreria que transforme nuestro codigo en es6 a es5 para poder ser interpretado por un navegador. Para lograr esto usaremos un famoso transpilador llamado 'babel'.

Como babel lo utilizaremos unicamente para nuestro desarrollo de la aplicacion, debe ir en "devDependencies". Por ende lo instalamos de la siguiente manera.

```
npm install --save-dev babel-loader babel-core babel-preset-es2015
```

Y para que webpack transpile nuestro codigo con babel tambien deberemos indicarselo de esta manera.

```
resolve: {
	extensions: ['.js', '.jsx']
},
module: {
	rules: [{
		test: /\.jsx?$/,
		loader: 'babel-loader',
		include: path.join(__dirname, 'src')
	}]
}
```

Te invitamos a que visto como se creaba un componente en ES6, que pases nuestro componente de Hello world a un archivo separado y lo definas como clase para luego consumirlo desde el archivo javascript principal.

Si no llegas a terminar este ejercicio podes checkoutear la branch 1.4