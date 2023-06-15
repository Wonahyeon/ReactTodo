import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoListWrapper = styled.div`
  /* min-height: 300px; */
  width: 35rem;
`;

function TodoList(props) {
  const {todos, doneCount, setDoneCount, handleDoneCount, startDate, endDate, onRemove, onToggle} = props;
  return (
    <TodoListWrapper>
      {todos.map((todo) => {
        return (
          <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} doneCount={doneCount} setDoneCount={setDoneCount} handleDoneCount={handleDoneCount} startDate={startDate} endDate={endDate}/>
        );
      })}
    </TodoListWrapper>
  );
}

export default React.memo(TodoList);