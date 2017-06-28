import {
	render,
} from "react-dom";

import React from "react";

import HelloWorld from "./components/hello-world";

const containerEl = document.getElementById("react-app");

render(React.createElement(HelloWorld), containerEl);