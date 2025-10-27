export const getAllTasks = (state) => state.tasks;
export const getCompletedTasks = (state) => state.tasks.tasks.filter(task => task.completed);
export const getActiveTasks = (state) => state.tasks.tasks.filter(task => !task.completed);
