import React from 'react';
import styled from 'styled-components';
import { MdOutlineTrendingFlat as NextIcon } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";


const TodoInsertWrapper = styled.div`
  width: 35rem;
  display: flex;
  flex-direction: column;

  .inputStyle {
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
  }

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
  const {onInsert, onContent, title, setTitle, content, setContent, inputEmpty, setInputEmpty, endDate, setEndDate, startDate, setStartDate} = props;

  

  const navigate = useNavigate();

  const handleChange = (e) => {
    setTitle(e.target.value);
    e.target.value ?
      setInputEmpty(false):
      setInputEmpty(true);
    };
    
  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    onInsert(title,content, startDate, endDate);
    setTitle('');
    setContent('');
    setEndDate(new Date());
    setInputEmpty(false); 
    setInputEmpty(true);

    navigate('/todo-list');
    e.preventDefault();
  };
  return (
    <TodoInsertWrapper>
      <label htmlFor='title'>제목</label>
      <input type='text' id='title'
        className='inputStyle'
        maxLength={20}
        placeholder='제목을 입력해주세요. (20자이내)'
        value={title}
        onChange={handleChange}
      />
      <label htmlFor='content'>내용</label>
      <textarea type='text' id='content'
        className='inputStyle'
        style={{height:'8rem', resize: 'none'}}
        maxLength={100}
        placeholder='내용을 입력해주세요. (100자 이내)'
        value={content}
        onChange={handleContent}
      />
      <div className="datePickerWrapper">
        <label>시작
          <DatePicker selected={startDate} onChange={date => setStartDate(date)} dateFormat="yyyy-MM-dd" locale={ko} value={startDate} >
          </DatePicker>
        </label>
        <NextIcon/>
        <label>마감
          <DatePicker selected={endDate} onChange={date => setEndDate(date)} dateFormat="yyyy-MM-dd" locale={ko} value={endDate} >
          </DatePicker>
        </label>
      </div>
      <StyledButton type='submit' disabled={inputEmpty} onClick={handleSubmit}>
        추가하기
      </StyledButton>
    </TodoInsertWrapper>
  );
}

export default TodoInsert;