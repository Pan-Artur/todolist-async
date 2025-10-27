import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask, toggleTask } from "./operations";

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = state.tasks.filter(task => task.id !== action.payload);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(toggleTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(toggleTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const updatedTask = action.payload;
        const index = state.tasks.findIndex(task => task.id === updatedTask.id);
        
        if (index !== -1) {
          state.tasks[index] = updatedTask;
        }
      })
      .addCase(toggleTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const tasksReducer = tasksSlice.reducer;