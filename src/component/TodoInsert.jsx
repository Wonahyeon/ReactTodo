import React, { useState } from 'react';
import styled from 'styled-components';
import { MdOutlineTrendingFlat as NextIcon } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const TodoInsertWrapper = styled.div`
  width: 35rem;
  display: flex;
  flex-direction: column;
  /* background: #495057; */
  /* color: white; */

  .datePickerWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    text-align: center;
    input {
      cursor: pointer;
      background: none;
      outline: none;
      border: 1px solid #dee2e6;
      margin: 5px 0;
      border-radius: 10px;
      padding: 0.5rem;
      font-size: 1rem;
      text-align: center;
      color: gray;
    }
    svg {
      font-size: 1.5rem;
      color: gray;
    }
  }
`;

const StyledInput = styled.input`
  /* 기본 스타일 초기화 */
  background: none;
  outline: none;
  border: 1px solid #dee2e6;
  margin: 5px 0;
  border-radius: 10px;
  padding: 0.5rem;
  font-size: 1rem;
  color: #495057;
  &::placeholder {
    color: #dee2e6;
  }
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 10px;
  background: #868e96;
  color: white;
  font-size: 1rem;
  margin: 0 auto;
  width: 5rem;
  cursor: pointer;
  transition: 0.2s background ease-in;

  &:hover {
    background: #adb5bd;
  }
`;

function TodoInsert(props) {
  const {onInsert, value, setValue, inputEmpty, setInputEmpty, diffDate, setDiffDate, startDate, setStartDate} = props;

  console.log(diffDate);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
    e.target.value ?
      setInputEmpty(false):
      setInputEmpty(true);
  };

  const handleSubmit = (e) => {
    onInsert(value);
    setValue(''); // value값 초기화
    setInputEmpty(false); 
    setInputEmpty(true);

    // todo-list로 이동
    navigate('/todo-list');
    // submit 이벤트가 발생시키는 새로고침을 방지
    e.preventDefault();
  };
  return (
    // form 태그 사용시 input에서 엔터키를 눌렀을 때도 submit 이벤트 발생
    // 일반적으로 keyup 이벤트를 통해 엔터키를 감지하는 로직을 작성
    // 
    <TodoInsertWrapper>
      <label htmlFor='title'>제목</label>
      <StyledInput type='text' id='title'
        placeholder='제목을 입력해주세요. (10자이내)'
        value={value}
        onChange={handleChange}
      />
      <label htmlFor='content'>내용</label>
      <StyledInput type='text' id='content'
        placeholder='내용을 입력해주세요. (200자 이내)'
      />
      <div className="datePickerWrapper">
        <label>시작
          <DatePicker selected={startDate} onChange={date => setStartDate(date)} dateFormat="yyyy-MM-dd" />
        </label>
        <NextIcon/>
        <label>마감
          <DatePicker selected={diffDate} onChange={date => setDiffDate(date)} dateFormat="yyyy-MM-dd" />
        </label>
      </div>
      <StyledButton type='submit' disabled={inputEmpty} onClick={handleSubmit}>
        추가하기
      </StyledButton>
    </TodoInsertWrapper>
  );
}

export default TodoInsert;