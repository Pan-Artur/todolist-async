import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, toggleTask } from "../../redux/operations";
import { getAllTasks } from "../../redux/selectors";
import { fetchTasks } from "../../redux/operations";

import {
  Container,
  Title,
  InputContainer,
  Input,
  AddButton,
  TaskList,
  TaskItem,
  TaskText,
  RemoveButton,
  EmptyState,
  TaskCount,
} from "./styles/TodoList.styled";

const TodoList = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const { tasks, isLoading, error } = useSelector(getAllTasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleAddTask = () => {
    if (inputValue.trim()) {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };

      dispatch(addTask(newTask));
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  const handleToggleCompleted = (task) => {
    dispatch(toggleTask(task));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const completedCount = tasks?.filter((task) => task.completed).length;

  return (
    <Container>
      <Title>Todo List</Title>

      <InputContainer>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a new task..."
        />
        <AddButton
          type="button"
          onClick={handleAddTask}
          disabled={!inputValue.trim()}
        >
          Add
        </AddButton>
      </InputContainer>

      {tasks.length === 0 ? (
        <EmptyState>No tasks yet. Add your first task!</EmptyState>
      ) : (
        <>
          <TaskList>
            {isLoading}
            {error}
            {tasks.map((task) => (
              <TaskItem key={task.id} $isCompleted={task.completed}>
                <TaskText
                  $isCompleted={task.completed}
                  onClick={() => handleToggleCompleted(task)}
                >
                  {task.text}
                </TaskText>
                <RemoveButton
                  type="button"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  Remove
                </RemoveButton>
              </TaskItem>
            ))}
          </TaskList>
          <TaskCount>
            {completedCount} of {tasks.length} tasks completed
          </TaskCount>
        </>
      )}
    </Container>
  );
};

export default TodoList;