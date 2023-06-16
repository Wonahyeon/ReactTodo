import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdKeyboardBackspace as BackIcon } from "react-icons/md";
import { MdOutlineTrendingFlat as NextIcon } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";


const TodoEditWrapper = styled.div`
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

function TodoEdit(props) {
  const {todos, handleModify} = props;

  const navigate = useNavigate();
  const {todoId} = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    const findTodo = todos.find(todo => todo.id === todoId);

    if (findTodo) {
      setTitle(findTodo.title);
      setContent(findTodo.content);
      setStartDate(findTodo.startDate);
      setEndDate(findTodo.endDate);
    }
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    // if (!value) {
    //   alert('할일입력');
    //   return;
    // }
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleClick = () => {
    handleModify(todoId, title, content, startDate, endDate);
    navigate('/todo-list');
  }

  return (
    <div className='wrapper'>
      <div className="header">
        <BackIcon onClick={() => {
              navigate(-1);
            }}/>
        <h3 className='title'>Todo 수정하기</h3>
      </div>
      <TodoEditWrapper>
        <label htmlFor='title'>제목</label>
        <input type='text' id='title'
          className='inputStyle'
          value={title}
          onChange={handleTitleChange}
          />
        <label htmlFor='content'>내용</label>
        <textarea type='text' id='content'
          className='inputStyle'
          style={{height:'8rem', resize: 'none'}}
          maxLength={100}
          value={content}
          onChange={handleContentChange}
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
        <StyledButton onClick={handleClick}>
          수정하기
        </StyledButton>
      </TodoEditWrapper>
    </div>
  );
}

export default TodoEdit;