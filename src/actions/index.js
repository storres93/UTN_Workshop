export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO_CREATOR = "UPDATE_TODO_CREATOR";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const RESET_TODOS = "RESET_TODOS";
export const REORDER_TODO = "REORDER_TODO";

let nextTodoId = 0
export const fireAddTodo = (text) => ({
	type: ADD_TODO,
	payload: {
		id: nextTodoId++,
		text,
	}
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
})