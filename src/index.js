var React = require("react");
var ReactDOM = require("react-dom");

var rootElement = React.createElement('h1', {}, "Hola Mundo!");

ReactDOM.render(rootElement, document.getElementById('react-app'));