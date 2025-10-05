import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask(state, action) {
      const newTask = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    },
    removeTask(state, action) {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    },
    toggleTask(state, action) {
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    },
  },
});

export const { addTask, removeTask, toggleTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;