# Decimo ejercicio
## Unit Testing en React
Para poder hacer unit testing en react, vamos a necesitar varias cosas: un test runner, un browser, una libreria de assertions. Para esto vamos a utilizar como test runner mocha y karma, como browser PhantomJS, como libreria de assertions chai y ademas para poder montar nuestros componentes utilizaremos enzyme y sinon para poder testear las funciones de nuestros componentes.

Es por esto que debemos instalar las librerias correspondientes:

```
npm install --save-dev chai-enzyme enzyme karma karma-chai karma-mocha karma-phantomjs-launcher karma-sinon karma-webpack node-sass react-addons-test-utils react-test-renderer react-addons-test-utils react-test-renderer
```

Para poder correr unit tests deberemos realizar unos pequeños cambios sobre nuestra configuracion de entorno.

## Webpack
Para poder testear con enzyme en react debemos agregar una propiedad a nuestra configuracion de webpack:

```
externals: {
	'react/addons': true,
	'react/lib/ExecutionEnvironment': true,
	'react/lib/ReactContext': true,
}
```

Esta configuracion nos va a permitir tener react en nuestro ambiente de testing.

## Babel
Previamente habiamos configurado un preset de babel para utilizar HMR en react, `react-hmre`. Como no vamos a utilizar HMR mientras corremos los tests, debemos informarle a babel que lo utilize unicamente cuando se esta desarrollando.

Para esto babel nos permite indicarle ambientes sobre que preset queremos que se utilize para cada uno.

Modificando correctamente el `.babelrc` tendremos:
```
{
  "presets": ["es2015", "react"],
  "env": {
    "development": {
      "presets": ["react-hmre"]
    },
    "testing": {
      "presets": []
    }
  },
  "plugins": ["transform-class-properties", "transform-object-rest-spread"]
}
```

## Karma
Como vamos a correr nuestros tests con karma, primero hay que configurarlo. Es por esto que crearemos un archivo karma.conf.js que quedara de la siguiente manera:

```
module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['mocha', 'chai', 'sinon'],
		files: [
			'src/**/*.spec.jsx'
		],
		exclude: [],
		preprocessors: {
			"src/**/*.spec.jsx": ["webpack"]
		},
		// webpack configuration
		webpack: require("./webpack.config.js"),
		webpackMiddleware: {
			stats: "errors-only"
		},
		reporters: ['progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
		browsers: ['PhantomJS'],
		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,
		concurrency: Infinity
	});
};
```

### basePath
Esto nos indica desde que path queremos correr nuestros tests.
### Frameworks
Aca indicamos con que frameworks vamos a querer trabajar arriba de karma. En nuestro caso son mocha, chai y sinon.
### Files
Aca indicamos que archivos queremos que corra karma. Es bastante standard agregar un `.spec` para cada archivo de testing con la parte previa indicando que archivo se va a testear.
### Preprocessors
Como nuestros archivos estan escritos en es6 vamos a tener que transpilarlos antes de que karma los corra. Por esto indicamos que todos los archivos jsx primero se transpilen por webpack
### Webpack & WebpackMiddleware
Debemos pasar la configuracion de webpack y una configuracion sobre que mostrar en el bundle
### Reportes
Aqui indicamos que reporter queremos usar.
### Port
Karma necesita levantar un servidor sobre donde correr los tests. Aca indicamos en que puerto se levanta.
### Colors && logLevel
Esta es la configuracion sobre como queremos que karma indique los resultados del tests
### autoWatch && singleRun
Basicamente queremos que karma se ejecute una sola vez y no que lo haga cada vez que un archivo se modifica
### Browsers
Aca indicamos todos los browsers donde queremos que se corran nuestros tests. En una instancia de produccion aqui pondriamos los browser que generalmente utilizan los usuarios (Firefox, Chrome, Safari, IE)

## Package.json
Es momento de agregar nuestro script de testing:

```
...
"scripts": {
	...
	"test": "export NODE_ENV=testing && karma start"
	...
}
```

## Archivos de testing
Vamos a crear nuestro primer test para nuestro componente `Todo Container`.
Nuestro objetivo va a ser testear que el componente se renderiza. Para esto vamos a crear un archivo `index.spec.jsx` junto con el de `Todo Container`.

Lo primero que debemos hacer es importar las dependencias en este caso: React chai y enzyme.

```
import React from 'react';
import {expect} from 'chai';
import { mount, shallow} from 'enzyme';
import sinon from 'sinon';
```

Luego debemos importar el componente a testear, en este caso `Todo Container`

```
import React from 'react';
import {expect} from 'chai';
import { mount, shallow} from 'enzyme';
import sinon from 'sinon';

import TodoContainer from './index.jsx';
```

Luego debemos describir que es lo que queremos testear, en este caso el componente en si.

```
import React from 'react';
import {expect} from 'chai';
import { mount, shallow} from 'enzyme';
import sinon from 'sinon';

import TodoContainer from './index.jsx';

describe('<TodoContainer />', () => {
});
```

Ahora es momento de escribir cada caso de prueba, en primer instancia queremos probar que nuestro componente se renderizo correctamente al fijarnos si existe su elemento contenedor.

Para esto primero debemos montarlo y luego buscar el elemento correspondiente.

```
import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';

import TodoContainer from './index.jsx';

describe('<TodoContainer />', () => {
	it('Renders a container', () => {
		expect(shallow(<TodoContainer />).find('.todo-container').length).to.equal(1);
	});
});
```

## Testing de funciones
Supongamos que queremos testear si dado un click se llamo a alguna funcion. Para esto utilizaremos sinon.

Dado nuestro componente Todo Creator, queremos verificar que cuando se hace click sobre el boton, se llame a la funcion createTodo que es pasada desde el componente padre.

Para esto en vez de pasar una funcion cualquier al componente, aplicaremos un espia de sinon de manera que:
```
it('simulates click events', () => {
	const createTodo = sinon.spy();
	const wrapper = shallow((<TodoCreator createTodo={createTodo}/>));
});
```
Cuando se llame a la funcion `createTodo` sinon incrementara una propiedad `callCount` de la funcion que tendra el numero de veces que fue invocada.

Lo que sigue es simular el click sobre el el elemento `button`. Para esto utilizaremos la funcion `simulate` de enzyme que nos permite simular acciones sobre componentes.
```
it('simulates click events', () => {
	const createTodo = sinon.spy();
	const wrapper = shallow((<TodoCreator createTodo={createTodo}/>));
	wrapper.find('button').simulate('click');
});
```
Por ultimo debemos checkear que la funcion createTodo fue llamada
```
it('simulates click events', () => {
	const createTodo = sinon.spy();
	const wrapper = shallow((<TodoCreator createTodo={createTodo}/>));
	wrapper.find('button').simulate('click');
	expect(createTodo).to.have.property('callCount', 1);
});
```

Si no llegas a terminar este ejercicio podes checkoutear la branch 1.12