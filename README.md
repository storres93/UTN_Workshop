#Sexto ejercicio
##Todo Creator
Ya teniendo nuestro ambiente de desarrollo bien definido es momento de empezar nuestra aplicacion.

Para esto como ya vimos vamos a usar jsx. Entonces el primer paso seria pasar nuestros componentes ya realizados al formato en jsx.

Luego vamos a empezar a crear nuestro primer componente: Todo Creator.

Para este ejercicio unicamente requerimos que tenga un input donde podemos ponerle un nombre a nuestro todo y un boton que emita un alert.

Para esto debemos incluir una funcion de handler a nuestra clase.

```
	...
	handlerClick() {
		alert("Hola mundo");
	}
	...
```

Ademas debemos bindear esta funcion con nuestro boton.

```
	...
	<button onClick={this.handleClick}>Agregar To Do</button>
	...
```

Y por ultimo debemos bindear nuestro this, a la funcion desde el constructor de nuestra funcion.

```
	...
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}
	...
```

Props refiere a las propiedades que luego pasaremos a nuestro TodoCreator y es como se pasan propiedades a elementos de React.
Utilizamos super para inicializar nuestro componente ya que sino no podremos utilizar `this`.

Si no llegas a terminar este ejercicio podes checkoutear la branch 1.6