# Noveno ejercicio
## Sass

Sass o Syntactically Awesome Style Sheets es una manera de describir estilos que extiende css que utiliza la extension `scss`. Este nos permite (dentro de otras cosas) poder definir variables dentro de los archivos scss o poder definir jerarquia de clases dentro del mismo.

Para poder trabajar con sass y webpack primero deberemos configurar webpack para que pueda transpilar nuestros archivos `.scss` y asi agregarlos al DOM.

Para poder cargar css desde webpack debemos instalar su `loader` correspondiente `css-loader`. Ademas deberemos incluir tambien el `loader` de estilos y sass. Estos los podemos instalar de la siguiente manera:

```
npm install --save-dev css-loader node-sass sass-loader style-loader
```

Luego desde nuestra configuracion de webpack debemos indicar que transpile estos archivos. Por lo que nos quedaria:

```
{
	...
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			include: path.join(__dirname, 'src'),
		}, {
			test: /\.scss$/,
			use: [{
				loader: "style-loader" // creates style nodes from JS strings
			}, {
				loader: "css-loader" // translates CSS into CommonJS
			}, {
				loader: "sass-loader" // compiles Sass to CSS
			}]
		}]
	}
}
```

## Estilos en React
Para incluir estilos en un componente simplemente debemos importar el archivo de estilos correspondientes previo a la declaracion de la clase.

Suponiendo por ejemplo que hubiese un archivo `main.scss` junto con nuestro componente de `Todo Container`, entonces simplemente debemos incluirlo de la siguiente manera.

```
import './main.scss';
export default class TodoContainer extends Component {
	...
}
```

## Clases en React
Para incluir una clase en un elemento de React se debe agregar con la propiedad `className`.

Si quisieramos agregar una clase `todo-container` al div contenedor del componente `Todo Container` se agregaria de la siguiente manera:

```
render() {
	return <div className="todo-container">
			...
		</div>
```

## Clases dinamicas en React
Muchas veces necesitamos agregar clases dependiendo el estado de nuestro componente. Para esto utilizamos string interpolation dado por es6. Este se basa en poder agregar dinamicamente a un string otros substrings.

Si quisieramos agregar una clase `checked` a cada todo que este completado, suponiendo que tenemos en el estado una variable `checked` que cambia cada vez que se clickea el checkbox, lo podemos realizar de la siguiente manera:

```
render() {
	return <div>
		<input type='checkbox' onChange={ this.toggleCheck }/><span className={`${ this.state.checked ? 'checked' : '' }`}> { this.props.todo } </span>
	</div>
}
```

Invitamos a todos a que creen sus propias hojas de estilos para cada componente para que se vean como ustedes quieran.

Si no llegas a terminar este ejercicio o queres tener los estilos que vamos a estar presentado podes checkoutear la branch 1.10