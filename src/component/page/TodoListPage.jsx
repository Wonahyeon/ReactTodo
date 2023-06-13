import React, { useCallback, useState } from 'react';
import styled from "styled-components";
import { MdKeyboardBackspace as BackIcon } from "react-icons/md";
import { MdMode as AddIcon } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import TodoList from '../TodoList';

const TodoListWrapper = styled.div`
  width: 40rem;
  min-height: 30rem;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 1.5rem;
  background: white;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  `;

  const TodoListHeader = styled.div`
    width: 40rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;

    svg {
      color: gray;
      cursor: pointer;
    }

    svg:hover {
      color: black;
    }

    .title {
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
      flex: 1;
    }
  `;

  const TodoListMode = styled.div`
    width: 35rem;
    display: flex;
    margin-bottom: 2rem;

    p {
      font-size: 0.9rem;
      padding: 0 .5rem;
      color: gray;
      cursor: pointer;

      &:hover {
        color: black;
      }
    }
  `;

  const TodoListCount = styled.div`
    width: 15rem;
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    color: gray;
  `;

function TodoListPage(props) {
  const {todos, setTodos, onRemove, onToggle, endDate, setEndDate, dayCount, setDayCount} = props;
  
  const [doneCount, setDoneCount] = useState(0);

  const handleDoneCount = useCallback((count) => {
    setDoneCount(count + 1);
  })

  const navigate = useNavigate();
  return (
    <TodoListWrapper>
      <TodoListHeader>
        <BackIcon onClick={() => {
            navigate("/");
          }}/>
          <h3 className='title'>Todo List</h3>
          <AddIcon onClick={() => {
            navigate("/todo-write");
          }}/>
      </TodoListHeader>
      <TodoListMode>
        <p>제목</p>
        <p>날짜</p>
        <p>자세히</p>
      </TodoListMode>
      <TodoList todos={todos} setTodos={setTodos} onRemove={onRemove} onToggle={onToggle} endDate={endDate} setEndDate={setEndDate} dayCount={dayCount} setDayCount={setDayCount} doneCount={doneCount} setDoneCount={setDoneCount} handleDoneCount={handleDoneCount}/>
      <TodoListCount>
        <p>Total: {todos.length}</p>
        <p>Working: {todos.length - doneCount}</p>
        <p>Done: {doneCount}</p>
      </TodoListCount>
    </TodoListWrapper>
  );
}

export default TodoListPage;