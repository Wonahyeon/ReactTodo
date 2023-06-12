import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { MdMode as AddIcon } from "react-icons/md";
import { MdFormatListBulleted as ListIcon } from "react-icons/md";

const Title = styled.div`
  color: gray;
  height: 4rem;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 3rem 0;
`;

const TodoMainWrapper = styled.div`
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

function TodoMainPage(props) {
  const navigate = useNavigate();

  return (
    <>
    <Title>TODO LIST</Title>
    <TodoMainWrapper>
      <TodoButton onClick={() => {
        navigate("/todo-write");
      }}>
        <AddIcon />
      </TodoButton>
      <TodoButton onClick={() => {
        navigate("/todo-list");
      }}>
        <ListIcon />
      </TodoButton>
    </TodoMainWrapper>
    </>
  );
}

export default TodoMainPage;