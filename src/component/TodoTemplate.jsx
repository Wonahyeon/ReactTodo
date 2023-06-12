import React from 'react';
import styled from 'styled-components';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoDetail from './TodoDetail';
import { IoArrowBack as backIcon } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const TodoTemplateWrapper = styled.div`
  width: 40rem;
  height: 20rem;
  margin: 0 auto;
  margin-top: 1rem;
  border-radius: 1.5rem;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

  const TodoButton = styled.div`
    border: none;
    background: black;
    width: 6rem;
    height: 6rem;
    border-radius: 6rem;
    margin: 0 5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: white;
      font-size: 3rem;
    }
  `;


function TodoTemplate(props) {
  const { children } = props;
  const navigate = useNavigate();

  return (
    <TodoTemplateWrapper>
      
    </TodoTemplateWrapper>
  );
}

export default TodoTemplate;