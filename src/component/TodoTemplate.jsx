import React from 'react';
import styled from 'styled-components';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoDetail from './TodoDetail';

const TodoTemplateWrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-top: 1rem;
  border-radius: 4px;
  display: flex;

  .taskWrapper {
    flex: 1;
    background: white;
  }
  
  .content {
    background: white;
    margin-left: 5rem;
    flex: 2;
  }
  `;

  const TodoButton = styled.button`
    
  `;


function TodoTemplate(props) {
  const { children } = props;

  return (
    <TodoTemplateWrapper>
      <div className='taskWrapper'>
        <TodoInsert/>

      </div>
      <div className='content'>{children}</div>
    </TodoTemplateWrapper>
  );
}

export default TodoTemplate;