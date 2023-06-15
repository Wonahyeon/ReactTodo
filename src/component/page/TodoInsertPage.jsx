import React from 'react';
import { MdFormatListBulleted as ListIcon } from "react-icons/md";
import { MdKeyboardBackspace as BackIcon } from "react-icons/md";
import TodoInsert from '../TodoInsert';
import { useNavigate } from 'react-router-dom';

function TodoInsertPage(props) {
  const {onInsert, title, setTitle, content, setContent, inputEmpty, setInputEmpty, endDate, setEndDate, startDate, setStartDate } = props;
  const navigate = useNavigate();
  console.log(startDate);
  console.log(endDate);
  return (
    <div className='wrapper'>
      <div className='header'>
        <BackIcon onClick={() => {
          navigate("/");
        }}/>
        <h3 className='title'>Todo 작성하기</h3>
        <ListIcon onClick={() => {
          navigate("/todo-list");
        }}/>
      </div>
      <TodoInsert onInsert={onInsert} title={title} setTitle={setTitle} content={content} setContent={setContent} inputEmpty={inputEmpty} setInputEmpty={setInputEmpty} endDate={endDate} setEndDate={setEndDate} startDate={startDate} setStartDate={setStartDate}/>
    </div>
  );
}

export default React.memo(TodoInsertPage);