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
      border-radius: 3px;
      margin-right: 0.5rem;
      font-size: 0.9rem;
      padding: .2rem;
      cursor: pointer;

      &:hover {
        font-weight: bold;
      }
    }

  `;

  const TodoListCount = styled.div`
    width: 15rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    color: gray;
  `;

function TodoListPage(props) {
  const {todos, setTodos, onRemove, onToggle,startDate, setStartDate, endDate, setEndDate, dayCount, setDayCount} = props;
  const [doneCount, setDoneCount] = useState(0);
  const [titleClick, setTitleClick] = useState(false);
  const [dateClick, setDateClick] = useState(false);
  const [click, setClick] = useState(false); // todoClick
  
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

  const handleTitleArrange = () => {
    let copy = [...todos];
    copy.sort((a,b) => {return a.title > b.title ? 1 : -1});
    setTodos(copy);
    setTitleClick(true);
    setDateClick(false);
  };
  const handleDateArrange = () => {
    let copy = [...todos];
    copy.sort((a,b) => {return a.endDate > b.endDate ? 1 : -1});
    setTodos(copy);
    setTitleClick(false);
    setDateClick(true);
  };

  const handleClick = () => {
    click ? setClick(false): setClick(true);
  };

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
        <p style={{color: titleClick? 'black' : 'gray'}} onClick={handleTitleArrange}>제목</p>
        <p style={{color: dateClick? 'black' : 'gray'}} onClick={handleDateArrange}>날짜</p>
        <p style={{color: click? 'black' : 'gray'}} onClick={handleClick}>자세히</p>
      </TodoListMode>
      <TodoListCount>
        <p>Total: {todos.length}</p>
        <p>Working: {todos.length - doneCount}</p>
        <p>Done: {doneCount}</p>
      </TodoListCount>
      <TodoList todos={todos} setTodos={setTodos} onRemove={onRemove} onToggle={onToggle} endDate={endDate} setEndDate={setEndDate} dayCount={dayCount} setDayCount={setDayCount} doneCount={doneCount} setDoneCount={setDoneCount} handleDoneCount={handleDoneCount} click={click} setClick={setClick} />
    </div>
  );
}

export default TodoListPage;