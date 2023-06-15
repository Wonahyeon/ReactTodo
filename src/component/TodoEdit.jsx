import React from 'react';
import { MdKeyboardBackspace as BackIcon } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function TodoEdit(props) {
  const navigate = useNavigate();
  return (
    <div className='wrapper'>
      <div className="header">
        <BackIcon onClick={() => {
              navigate(-1);
            }}/>
        <h3 className='title'>Todo 수정하기</h3>
      </div>
      
    </div>
  );
}

export default TodoEdit;