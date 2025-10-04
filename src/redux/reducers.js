import { createReducer } from "@reduxjs/toolkit";
import { addAction, removeAction, toggleAction } from "./actions";

const initialState = {
  tasks: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addAction, (state, action) => {
      const newTask = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    })
    .addCase(removeAction, (state, action) => {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    })
    .addCase(toggleAction, (state, action) => {
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    });
});
