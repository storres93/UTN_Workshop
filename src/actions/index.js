export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO_CREATOR = "UPDATE_TODO_CREATOR";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const RESET_TODOS = "RESET_TODOS";
export const REORDER_TODO = "REORDER_TODO";
export const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
export const GET_TODOS_RESPONSE = "GET_TODOS_RESPONSE";
export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST";

import TodosApi from '../service/todos-api';

const todosApi = new TodosApi();
let nextTodoId = 3;

export const fireAddTodo = (text) =>
	(dispatch) => {
		dispatch(fireAddTodoRequest());
		const request = todosApi.addTodo(text, nextTodoId + 1);

		request
			.then((response) => {
				dispatch(fireAddTodoResponse(response));
			});

		return request;
	};

const fireAddTodoResponse = (text) => ({
	type: ADD_TODO,
	payload: {
		id: nextTodoId++,
		text,
	}
});

const fireAddTodoRequest = () => ({
	type: ADD_TODO_REQUEST,
});

export const fireUpdateTodoCreator = (text) => ({
	type: UPDATE_TODO_CREATOR,
	payload: {
		text
	},
});

export const fireToggleTodo = (id) => ({
	type: TOGGLE_TODO,
	payload: {
		id,
	}
});

export const fireResetTodos = (id) => ({
	type: RESET_TODOS,
});

export const fireReorderTodo = (id, up) => ({
	type: REORDER_TODO,
	payload: {
		id,
		up,
	}
});

const fireGetTodosRequest = () => ({
	type: GET_TODOS_REQUEST,
});

const fireGetTodosResponse = (todos) => ({
	type: GET_TODOS_RESPONSE,
	payload: {
		todos,
	}
});

export const fireGetTodos = () =>
	(dispatch) => {
		dispatch(fireGetTodosRequest());

		const request = todosApi.getTodos();

		request
			.then((response) => {
				dispatch(fireGetTodosResponse(response));
			});

		return request;
	};