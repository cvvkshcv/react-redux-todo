import { ADD_TODO, TODO_DONE } from "../actions/types";

let todoId = 0;
const createTodo = (todoText) => ({
    id: todoId++,
    text: todoText,
    done: false
});

export const todoList = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                createTodo(action.payload)
            ];
        case TODO_DONE:
            return state.map(todo => ((todo.id === action.payload.id) ? {...todo, done : action.checked} : todo));
        default:
            return state;
    }
}