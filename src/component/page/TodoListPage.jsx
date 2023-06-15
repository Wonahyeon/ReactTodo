import React, { useCallback, useEffect, useState } from 'react';
import styled from "styled-components";
import { MdKeyboardBackspace as BackIcon } from "react-icons/md";
import { MdMode as AddIcon } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import TodoList from '../TodoList';

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
  const {todos, setTodos, onRemove, onToggle, startDate, setStartDate, endDate, setEndDate, dayCount, setDayCount} = props;
  const [doneCount, setDoneCount] = useState(0);

  useEffect(() => {
    const dbDoneCount = JSON.parse(localStorage.getItem('doneCount')) || 0;
    setDoneCount(dbDoneCount);
  }, []);

  useEffect(() => {
    localStorage.setItem('doneCount', JSON.stringify(doneCount));
  }, [doneCount]);

  const handleDoneCount = useCallback((count) => {
    setDoneCount(count + 1);
  }, []);

  const navigate = useNavigate();
  return (
    <div className='wrapper'>
      <div className='header'>
        <BackIcon onClick={() => {
            navigate("/");
          }}/>
          <h3 className='title'>Todo List</h3>
          <AddIcon onClick={() => {
            navigate("/todo-write");
          }}/>
      </div>
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
    </div>
  );
}

export default TodoListPage;