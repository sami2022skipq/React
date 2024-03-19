import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, actions) => {
      const todo = {
        id: nanoid(),
        text: actions.paylod.text,
      };
      state.todos.push(todo);
    },
    removeToDo: (state, actions) => {
      state.todos = state.todos.filter((todo) => {
        todo.id !== actions.paylod;
      });
    },
  },
});

export const { addToDo, removeToDo } = todoSlice.actions;

export default todoSlice.reducer;
