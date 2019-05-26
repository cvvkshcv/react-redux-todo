import { ADD_TODO, TODO_DONE } from "./types";

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
});

export const makeTodoDone = (checked, payload) => ({
    type: TODO_DONE,
    payload,
    checked
});