import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoListWrapper = styled.div`
  /* min-height: 300px; */
  width: 35rem;

  .todoList {
      & > p {
      color: gray;
      padding: .2rem;
    }
  }
  .todoList:nth-child(2) div {
    background: lightgray;
    color: gray;
    svg {
      color: gray;
    }
  }
`;

function TodoList(props) {
  const {todos, doneCount, setDoneCount, handleDoneCount, startDate, endDate, onRemove, onToggle, click, setClick} = props;

  return (
    <TodoListWrapper>
      <div className="todoList">
        <p>Working..🔥</p>
        {todos.filter((todo) => !todo.checked).map((todo) => {
          return (
            <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}  doneCount={doneCount} setDoneCount={setDoneCount} handleDoneCount={handleDoneCount} startDate={startDate} endDate={endDate} click={click} setClick={setClick}/>
          );
        })}
      </div>
      <div className="todoList">
        <p>Done🤩</p>
        {todos.filter((todo) => todo.checked).map((todo) => {
          return (
            <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} doneCount={doneCount} setDoneCount={setDoneCount} handleDoneCount={handleDoneCount} startDate={startDate} endDate={endDate} click={click} setClick={setClick}/>
          );
        })}
      </div>
    </TodoListWrapper>
  );
}

export default React.memo(TodoList);