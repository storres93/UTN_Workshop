# Octavo ejercicio
## State
Como vimos previamente, tuvimos que utilizar la funcion `forceUpdate()` para que React tome los cambios que realizamos sobre propiedades internas de la clase y vuelva a renderizar nuestros componentes.

Si queremos que esto se realize automaticamente debemos utilizar el `state` del componente. Entonces pasamos a cambiar nuestra propiedad interna `todos` del componente `Todo Container` a que sea una propiedad del estado de nuestra clase e inicializarlo con los `props` que recibe el componente.

```
constructor(props) {
	super(props);

	this.createTodo = this.createTodo.bind(this);
	this.state = {
		todos: this.props.todos
	};
}
```

Ahora podemos ver que en el caso de un componente que reciba muchas `props` esa declaracion podria quedar bastante grande y ensuciar nuestro codigo.
En este momento es conveniente agregar un nuevo plugin de babel `transform-object-rest-spread` que nos permite expandir todos los elementos o propiedades de un objeto. Entonces utilizando este nuevo plugin, nuestra inicializacion del estado quedaria de la siguiente manera:

```
constructor(props) {
	super(props);

	this.createTodo = this.createTodo.bind(this);
	this.state = {
		...this.props
	};
}
```

Ahora para actualizar el estado de un componente no podemos simplemente modificar la propiedad correspondiente del objeto `state` de la siguiente manera `this.state.todos = []` sino que debemos llamar a una funcion propia de react `setState` que se encarga de actualizar el estado de la aplicacion y de forzar el render nuevamente del componente.

Entonces nuestra funcion `createTodo` quedaria de la siguiente manera:

```
createTodo(newTodo) {
	const newTodos = this.state.todos;
	newTodos.push(newTodo);

	this.setState({
		todos: newTodos,
		});
}
```

Ademas de esto ahora en vez de pasar `this.todos` al componente `Todo List` deberemos pasarle `this.state.todos`.
Ahora cada vez que agreguemos un nuevo todo se renderizara de nuevo nuestro componente automaticamente.

Invitamos a todos a realizar de la misma manera para el `Todo Creator` el estado del mismo para que se borre el input cuando se agrega un nuevo ToDo.

Si no llegas a terminar este ejercicio podes checkoutear la branch 1.9