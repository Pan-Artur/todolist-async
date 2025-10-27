// import axios from "axios";

// import { fetchingInProgress, fetchingSuccess, fetchingError } from "./slice";

// axios.defaults.baseURL = "https://67a69122510789ef0dfbb742.mockapi.io/elements";

// export const fetchTasks = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress);

//     const response = await axios.get("/tasks");

//     console.log(response.data);

//     dispatch(fetchingSuccess(response.data));
//   } catch (error) {
//     console.error(error);

//     dispatch(fetchingError(error.message));
//   }
// }

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://67a69122510789ef0dfbb742.mockapi.io/elements";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/tasks");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (task, thunkAPI) => {
    try {
      const response = await axios.post("/tasks", task);

      console.log(response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);

      console.log(response.data);

      return taskId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleTask = createAsyncThunk(
  "tasks/toggleTask",
  async (task, thunkAPI) => {
    try {
      const { id, completed } = task;

      const response = await axios.put(`/tasks/${id}`, { 
        completed: !completed 
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);