# Decimo ejercicio
## Eslint
Eslint es una herramienta que nos permite verificar que nuestro codigo tiene el estilo apropiado. Esto sirve para estandarizar el estilo del codigo cuando se trabaja en equipo.

Como primera instancia debemos instalar Eslint.

```
npm install --save-dev eslint
```

Luego tenemos dos opciones. Podemos dejar que eslint se configure por si mismo o podemos agregar un archivo de configuracion `.eslintrc` propio. En este caso vamos a ejecutar la configuracion de eslint.

Desde una consola deben ejecutar
```
./node_modules/.bin/eslint --init
```

Luego de esto el programa preguntara por que tipo de configuracion se quiere. En particular vamos a utilizar la de `airbnb`.

En este momento eslint creo un archivo de configuracion `.eslintrc` con la configuracion elegida y ademas agrego dependencias para esta configuracion en nuestro `package.json`.

Ademas de esto es recomendado instalar el paquete `eslint-plugin-react` que trae reglas de estilo para aplicaciones en React. Debemos agregar este paquete a la configuracion de eslint, para esto en la propiedad `extends` dentro de `.eslintrc` debemos agregar `'plugin:react/recommended'` tal que quede de las siguiente manera:

```
extends: ['eslint:recommended','plugin:react/recommended']
```

Como tambien estamos utilizando es6, debemos agregar un parser de babel para que eslint pueda interpretar el codigo. Este parser es `babel-eslint` y debemos agregarlo en el archivo `.eslintrc` de manera que nos quede

```
parser: 'babel-eslint'
...
```

Recomendamos utilizar el archivo de configuracion que se encuentra en la branch `1.11`


## Pre commit hooks
Un pre commit hook es una accion que se ejecuta previamente a hacer un commit en git. En este caso nos interesa correr eslint antes de hacer algun commit para que no se puedan subir archivos que no se adapten al formato impuesto.

Entonces lo primero que debemos hacer es instalar `precommit-hook`

Luego debemos agregar un script `lint` a nuestro package.json de manera que:
```
{
	...
	"scripts": {
		...
		"lint": "eslint src/**/*.jsx src/**/*.js"
	}
	...
}
```

Y luego agregar el pre commit hook en nuestro `package.json` que ejecute este script previo al commit.

```
{
	...
	"pre-commit": [
		"lint"
	]
}
```

Ahora antes de cada commit se ejecutara el script de `lint` y si este falla no nos permitira committear hasta que arreglemos los errores

Si no llegas a terminar este ejercicio podes checkoutear la branch 1.11