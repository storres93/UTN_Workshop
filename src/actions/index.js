export const ADD_TODO = "ADD_TODO";

let nextTodoId = 0
export const fireAddTodo = (text) => ({
	type: 'ADD_TODO',
	payload: {
		id: nextTodoId++,
		text,
	}
});
