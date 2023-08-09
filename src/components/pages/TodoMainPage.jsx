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

   div {
    display: flex;
    flex-direction: column;
    align-items: center;
   }

   p {
    margin-top: 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: gray;
   }

   /* 모바일 */
   @media screen and (max-width: 360px) {
    width: 20rem;
    height: 30rem;
    flex-direction: column;
    justify-content: space-evenly;
    div {
      width: 20rem;
      height: 10rem;
      flex-direction: row;
    }
    p {
      display: none;
    }
   }
  `;

  const TodoButton = styled.div`
    background: lightsteelblue;
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
    <Title>MY TODO</Title>
    <TodoMainWrapper>
      <div>
        <TodoButton onClick={() => {
          navigate("/todo-write");
        }}>
          <AddIcon />
        </TodoButton>
        <p>Todo Write</p>
      </div>
      <div>
        <TodoButton onClick={() => {
          navigate("/todo-list");
        }}>
          <ListIcon />
        </TodoButton>
        <p>Todo List</p>
      </div>
    </TodoMainWrapper>
    </>
  );
}

export default TodoMainPage;