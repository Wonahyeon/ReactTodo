import React, { useState } from 'react';
import styled from 'styled-components';
import { MdAdd as AddIcon } from "react-icons/md";
// Tip: as를 사용하여 별칭을 붙여 사용하면 추후 아이콘이 바꿀때 한 곳만 바꾸면 되서 편함!

const TodoInsertWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* background: #495057; */
  color: white;
`;

const StyledInput = styled.input`
  /* 기본 스타일 초기화 */
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  color: #495057;
  flex: 1;

  &::placeholder {
    color: #dee2e6;
  }
`;

const StyledButton = styled.button`
  border: none;
  background: #868e96;
  color: white;
  /* padding: 0 1rem; */
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s background ease-in;

  &:hover {
    background: #adb5bd;
  }
`;
const today = new Date();
const nowDate = `${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}`;

function TodoInsert(props) {
  const {onInsert} = props;
  const [value, setValue] = useState('');
  const [inputEmpty, setInputEmpty] = useState(true); // 할 일 미입력시
  const [startDay, setStartDay] = useState('');



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
    // submit 이벤트가 발생시키는 새로고침을 방지
    e.preventDefault();
  };
  return (
    // form 태그 사용시 input에서 엔터키를 눌렀을 때도 submit 이벤트 발생
    // 일반적으로 keyup 이벤트를 통해 엔터키를 감지하는 로직을 작성
    // 
    <TodoInsertWrapper>
      <StyledInput type='text'
        placeholder='할 일을 입력하세요.'
        value={value}
        onChange={handleChange}
      />
      <StyledInput type='text'
        placeholder='마감: YYYYMMDD'
      />
      <StyledButton type='submit' disabled={inputEmpty} onClick={handleSubmit}>
        <AddIcon/>
      </StyledButton>
    </TodoInsertWrapper>
  );
}

export default TodoInsert;