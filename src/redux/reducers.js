import { ADD, REMOVE, TOGGLE } from "./constants";

const initialState = {
  tasks: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      const newTask = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    case REMOVE:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case TOGGLE:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    default:
      return state;
  }
};
