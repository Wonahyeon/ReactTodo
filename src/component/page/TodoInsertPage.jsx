import React from 'react';
import styled from "styled-components";

import { MdKeyboardBackspace as BackIcon } from "react-icons/md";
import TodoInsert from '../TodoInsert';
import { useNavigate } from 'react-router-dom';

const TodoInsertWrapper = styled.div`
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

function TodoInsertPage(props) {
  const {onInsert, value, setValue, inputEmpty, setInputEmpty, diffDate, setDiffDate, startDate, setStartDate } = props;
  const navigate = useNavigate();
  return (
    <TodoInsertWrapper>
      <TodoTitle>
        <BackIcon onClick={() => {
          navigate("/");
        }}/>
        <h3 className='title'>Todo 작성하기</h3>
      </TodoTitle>
      <TodoInsert onInsert={onInsert} value={value} setValue={setValue} inputEmpty={inputEmpty} setInputEmpty={setInputEmpty} diffDate={diffDate} setDiffDate={setDiffDate} startDate={startDate} setStartDate={setStartDate}/>
    </TodoInsertWrapper>
  );
}

export default TodoInsertPage;