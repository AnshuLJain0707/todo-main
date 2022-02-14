export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export function addTodo(todo : any) {
	return {
		type: ADD_TODO,
		payload: todo,
	}
};

export function deleteTodo(todo : any)  {
	return {
		type: DELETE_TODO,
		payload: todo,
	}
};

export function updateTodo(todo : any) {
	return {
		type: UPDATE_TODO,
        payload: todo,
		
	}
};