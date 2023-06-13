import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoListWrapper = styled.div`
  min-height: 320px;
  width: 35rem;
`;

function TodoList(props) {
  const {todos,doneCount, setDoneCount,handleDoneCount, onRemove, onToggle} = props;
  return (
    <TodoListWrapper>
      {todos.map((todo) => {
        return (
          <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} doneCount={doneCount} setDoneCount={setDoneCount} handleDoneCount={handleDoneCount}/>
        );
      })}
    </TodoListWrapper>
  );
}

export default React.memo(TodoList);