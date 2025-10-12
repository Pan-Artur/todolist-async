import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
// import { addAction, removeAction, toggleAction } from '../../redux/actions';
import { addTask, removeTask, toggleTask } from "../../redux/slice";
import { getAllTasks } from "../../redux/selectors";

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
  const [inputValue, setInputValue] = useState("");
  const tasks = useSelector(getAllTasks);
  const dispatch = useDispatch();

  // const handleAddTask = () => {
  //   if (inputValue.trim()) {
  //     dispatch(addAction(inputValue));
  //     setInputValue("");
  //   }
  // }

  // const handleKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     handleAddTask();
  //   }
  // };

  // const handleToggleCompleted = (taskId) => {
  //   dispatch(toggleAction(taskId));
  // };

  // const handleRemoveTask = (taskId) => {
  //   dispatch(removeAction(taskId));
  // };

  const handleAddTask = () => {
    if (inputValue.trim()) {
      dispatch(addTask(inputValue));
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  const handleToggleCompleted = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  const handleRemoveTask = (taskId) => {
    dispatch(removeTask(taskId));
  };

  const completedCount = tasks.filter((task) => task.completed).length;

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
            {tasks.map((task) => (
              <TaskItem key={task.id}>
                <TaskText
                  $isCompleted={task.completed}
                  onClick={() => handleToggleCompleted(task.id)}
                >
                  {task.text}
                </TaskText>
                <RemoveButton
                  type="button"
                  onClick={() => handleRemoveTask(task.id)}
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
