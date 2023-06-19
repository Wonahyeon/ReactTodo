import React from 'react';
import { MdKeyboardBackspace as BackIcon } from "react-icons/md";
import TodoInsert from '../TodoInsert';
import { useNavigate } from 'react-router-dom';

function TodoInsertPage(props) {
  const {onInsert, title, setTitle, content, setContent, inputEmpty, setInputEmpty, endDate, setEndDate, startDate, setStartDate } = props;
  const navigate = useNavigate();
  return (
    <div className='wrapper'>
      <div className='header'>
        <BackIcon onClick={() => {
          navigate("/todo-list");
        }}/>
        <h3 className='title'>Todo Write</h3>
      </div>
      <TodoInsert onInsert={onInsert} title={title} setTitle={setTitle} content={content} setContent={setContent} inputEmpty={inputEmpty} setInputEmpty={setInputEmpty} endDate={endDate} setEndDate={setEndDate} startDate={startDate} setStartDate={setStartDate}/>
    </div>
  );
}

export default React.memo(TodoInsertPage);