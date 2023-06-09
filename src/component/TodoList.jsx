import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoListWrapper = styled.div`
  min-height: 320px;
`;

function TodoList(props) {
  // const todos = props.todos;
  const {todos , onRemove, onToggle} = props;
  return (
    <TodoListWrapper>
      {/* <TodoListItem/>
      <TodoListItem/>
      <TodoListItem/> */}
      {/* Quiz: TodoListItem으로 이루어진 배열로 변환하여 반복 렌더링 */}
      {todos.map((todo) => {
        return (
          <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
        );
      })}
    </TodoListWrapper>
  );
}

export default TodoList;