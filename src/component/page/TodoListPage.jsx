import React from 'react';
import styled from "styled-components";

import { MdKeyboardBackspace as BackIcon } from "react-icons/md";
import TodoInsert from '../TodoInsert';
import { useNavigate } from 'react-router-dom';
import TodoList from '../TodoList';

const TodoListWrapper = styled.div`
  width: 40rem;
  height: 25rem;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 1.5rem;
  background: white;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  `;

  const TodoTitle = styled.div`
    width: 40rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;

    svg {
      color: gray;
      cursor: pointer;
    }

    svg:hover {
      color: black;
    }

    .title {
      font-weight: bold;
      text-align: center;
      flex: 1;
    }
  `;

function TodoListPage(props) {
  const {todos, onRemove, onToggle, diffDate, setDiffDate, dayCount, setDayCount} = props;
  const navigate = useNavigate();
  return (
    <TodoListWrapper>
      <TodoTitle>
        <BackIcon onClick={() => {
            navigate("/");
          }}/>
          <h3 className='title'>Todo List</h3>
      </TodoTitle>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} diffDate={diffDate} setDiffDate={setDiffDate} dayCount={dayCount} setDayCount={setDayCount} />
    </TodoListWrapper>
  );
}

export default TodoListPage;