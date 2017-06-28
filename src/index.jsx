import {
	render,
} from "react-dom";

import React from "react";

import TodoContainer from "./components/todo-container";

const containerEl = document.getElementById("react-app");

render(<TodoContainer />, containerEl);