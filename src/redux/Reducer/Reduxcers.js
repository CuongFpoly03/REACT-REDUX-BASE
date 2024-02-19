/* eslint-disable no-unreachable */
import { ADD_TODO, REMOVE_TODO } from "../Actions";

const initialState = {
  todos: ["123"],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [...state.todos, action.todo],
      });
      break;
    case REMOVE_TODO:
      return Object.assign({}, state, {
        todos: [...state.todos],
      });
    default:
      return state;
  }
};
