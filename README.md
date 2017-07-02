# Septimo ejercicio
## Todo Container
Es conveniente tener un compononete contenedor de todos los demas que utilizaremos. Para esto vamos a crear nuestro componente Todo Container.

Lo definiremos tal y como definimos el componente Todo Creator y vamos a hacer que nuestro archivo raiz `./src/index.jsx` consuma este componente Todo Container.

Ahora para agregar un componente a otro componente simplemente debemos importarlo y agregarlo a la funcion render tal como lo realizamos en nuestro archivo raiz.

Entonces nuestro componente Todo Container quedaria de la forma:

```
...
import TodoCreator from './components/todo-creator';

export default class TodoContainer {
	...
	render() {
		return <div>
			<TodoCreator />
		</div>
	}
}
```

Nuestro componente Todo Container sera el encargado de mantener actualizada la lista de Todo's que basicamente va a ser un array.

Entonces dentro de nuestro constructor podemos definir la propiedad todos que sera un array de cada uno de los todos que querramos implementar.

```
...
constructor(props) {
	super(props)

	this.todos = [];
}
```

Ahora debemos crear una funcion que actualize este array cuando se cree un nuevo todo. Entonces podemos, por ejemplo, crear una funcion dentro de nuestra clase createTodo que cuando se llama agregue un nuevo elemento a este array.

```
createTodo(text) {
	this.todos.push(text);
}
```

Recuerden que como hicimos en el ejercicio de Todo Creator, tambien debemos bindear esta funcion al `this` de la misma manera.

Pero desde algun lado se debe llamar esta funcion. Entonces es conveniente pasarle a nuestro Todo Creator una funcion que llame cuando se hace click sobre el boton y que llame a la funcion de Todo Container para agregar el nuevo elemento.

Aca es donde podemos ver el poder de los props. Simplemente podemos pasarle esta funcion que creamos a Todo Creator de esta manera:
```
...
render() {
	return <div>
		<TodoCreator createTodo={this.createTodo}/>
	</div>
}
...
```

Es conveniente y buena practica que por ejemplo a este todoCreator podamos pasarle un lista de todos ya previamente armada por algun componente que consuma a este.

Por eso en vez de crear la propiedad `todos` haremos que directamente la reciba como una `prop`. Esto lo indicaremos en el constructor de nuestra clase de la siguiente manera.

```
...
constructor(props) {
	super(props)

	this.todos = this.props.todos;
}
...
```

Pero nuestro componente deberia tambien tomar en cuenta, el caso donde no se le pase ninguna lista. Por eso es que debemos definir un estado `default` para nuestras propiedades.

En este momento es conveniente utilizar un plugin de babel que nos va a permitir crear dentro de nuestra clase la definicion por defecto de cada `prop`. Este plugin se llama "babel-plugin-transform-class-properties" que lo instalaremos tal y como hicimos para los presets.

Ademas deberemos indicarle a babel que queremos usar este plugin. Por eso dentro del `.babelrc` incluiremos una propiedad `plugins` que sera un array de todos los plugins que vamos a usar. Entonces nuestro `.babelrc` deberia quedar de la siguiente manera:

```
{
	"presets": ["es2015", "react", "react-hmre"],
	"plugins": ["transform-class-properties"]
}
```

Ahora ya teniendo esto, podemos definir las propiedades por defecto de nuestro componente. Esto se define como una variable estatica `defaultProps`. Luego agregaremos antes de nuestro constructor esta nueva variable que se define de la siguiente manera:
```
static defaultProps = {
	todos: []
}
...
```
## Todo Creator
Desde nuestro componente Todo Creator ahora deberemos tomar la funcion pasada desde nuestro padre y bindearla al `this` propio de la clase. Esto se realiza desde el constructor de la misma manera que ya lo realizamos previamente solo que no debemos bindearla a nuestro `this`.

```
...
constructor(props) {
	super(props)

	this.createTodo = this.props.createTodo;
	this.handleClick = this.handleClick.bind(this);
}
...
```

Ahora desde nuestro click handler debemos llamar a la funcion createTodo. Pero para esto primero vamos a tener que conseguir el texto de nuestro input de alguna manera.

Ya que es buena practica no modificar el dom desde cualquiera de nuestras funciones internas de la clase vamos a tener que tener una variable que mantenga el estado del input cada vez que se modifica. Para esto tendremos que crear una funcion de handler para cuando el input cambia su valor.
Ademas tendremos que inicializar una variable `todo` desde nuestro constructor que mantendra el estado del input.

Entonces nuestra funcion `handleInputChange` podra ser de la manera:

```
handleInputChange(event) {
	this.todo = event.target.value
}
```

Y se la bindeareamos al change del input como si fuese cualquier funcion handler:
```
<input type="text" placeholder="To do" onChange={this.handleInputChange} />
```

Ahora si podremos llamar a la funcion createTodo correctamente desde nuestro click handler:

```
handleClick() {
	this.createTodo(this.todo);
}
```

Hasta este momento ya deberiamos poder mantener el estado de los todos desde nuestro contenedor. Pero nos falta algun componente para mostrarlos.

## Todo List
Pasaremos a crear nuestro componente Todo List que sera el encargado de mostrar todos los `todos` que existan en nuestra aplicacion.

Crearemos este componente tal como lo hicimos con los previos con el detalle que desde nuestro Todo Container de la misma forma que pasamos createTodo al componente Todo Creator.

Ahora para poder mostrar todos los elementos en `todos` deberemos armar cada todo por separado desde la funcion render de la siguiente manera:

```
render() {
	var todoItems = this.todos.map((todo) => (
		<div>
			<input type="checkbox" /> <span> { todo } </span>
		</div>
	));

	return <div>
		{ todoItems }
	</div>;
}
```

Si hasta este punto siguieron todo como se especifica se van a encontrar con que cuando agreguen un todo. Se agregara al array de `todos` pero no veremos el cambio en la UI. Esto se debe a que React no vuelve a llamar a la funcion render cuando se modifica un propiedad interna de la clase como la es `todos` en nuestro componente Todo Container.

Es por esto que debemos informarle a React que vuelva a renderizar nuestros componentes. Esto lo logramos con la funcion `forceUpdate();` que es propia de la clase `Component` que extienden cada uno de nuestros componentes.

Entonces dentro de la funcion `createTodo` de `Todo Container` debemos llamar a esta funcion de tal manera que nos quede:

```
createTodo(newTodo) {
	this.todos.push(newTodo);
	this.forceUpdate();
}
```

Invitamos a todos a que realizen el componente `Todo Item` que contenga el input y el span que renderizamos en `Todo List` y que sea consumido por `Todo List`.

Si no llegas a terminar este ejercicio podes checkoutear la branch 1.7