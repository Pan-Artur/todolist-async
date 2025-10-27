import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #0a192f 0%, #112240 100%);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  color: #e6f1ff;
  overflow: hidden;
  transform: translateZ(0);
`;

export const Title = styled.h1`
  text-align: center;
  color: #64ffda;
  margin-bottom: 30px;
  font-size: 40px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 15px;
  border: 2px solid #233554;
  border-radius: 8px;
  font-size: 16px;
  background-color: #0a192f;
  color: #e6f1ff;
  outline: none;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: #8892b0;
  }

  &:focus {
    border-color: #64ffda;
    box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
  }
`;

export const AddButton = styled.button`
  padding: 15px 25px;
  background: linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%);
  color: #0a192f;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    box-shadow: 0 5px 15px rgba(100, 255, 218, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #233554;
    color: #8892b0;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TaskItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #112240 0%, #1d3b53 100%);
  border-radius: 10px;
  border-left: 4px solid ${props => props.$isCompleted ? '#8892b0' : '#64ffda'};
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-left-color 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transform: translateZ(0);
  will-change: transform;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
`;

export const TaskText = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  color: #e6f1ff;
  cursor: pointer;
  flex: 1;
  text-decoration: ${props => props.$isCompleted ? 'line-through' : 'none'};
  opacity: ${props => props.$isCompleted ? 0.6 : 1};
  color: ${props => props.$isCompleted ? '#8892b0' : '#e6f1ff'};
  transition: color 0.2s ease;
  backface-visibility: hidden;

  &:hover {
    color: #64ffda;
  }
`;

export const RemoveButton = styled.button`
  padding: 10px 18px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 20px 0 auto;

  &:hover {
    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 40px;
  color: #8892b0;
  font-size: 18px;
  font-style: italic;
`;

export const TaskCount = styled.div`
  text-align: center;
  margin-top: 20px;
  color: #64ffda;
  font-size: 14px;
  font-weight: 500;
`;