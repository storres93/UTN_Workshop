import {
	render,
} from "react-dom";

import React from "react";

import TodoCreator from "./components/todo-creator";

const containerEl = document.getElementById("react-app");

render(<TodoCreator />, containerEl);