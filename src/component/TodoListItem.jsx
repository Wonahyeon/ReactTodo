import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdCheckBox, MdCheckBoxOutlineBlank,MdRemoveCircleOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const TodoLsitItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  background: lightsteelblue;
  margin-bottom: 1rem;
  border-radius: 8px;
  svg {
    color: white;
  }

  .deadlineWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
    .diff {
      font-weight: bold;
      margin-bottom: .6rem;
    }
  }
  .contentWrapper {
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
    flex: 1;
    .title {
      font-weight: bold;
      margin-bottom: .8rem;
    }
  }
`;


const Checkbox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    /* 아이콘 스타일링 */
    font-size: 1.5rem;
    color: ${props => props.checked && '#24a3e8'};
  }
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1; // 차지할 수 있는 모든 영역 차지

  ${props => props.checked &&
    css`
      color: #adb5bd;
      /* text-decoration: line-through; */
    `
  }
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #d45959;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

function TodoListItem({todo: {id, title, content, checked, endDate}, doneCount, setDoneCount, onRemove, onToggle, click}) {
  const today = new Date();
  const dayGap = endDate.getTime() - today.getTime();
  const dayCount = Math.ceil(dayGap / (1000 * 60 * 60 * 24));

  const navigate = useNavigate();

  return (
    <TodoLsitItemWrapper onClick={() => {
      navigate("/todo-edit");
    }}>
      <div className='deadlineWrapper'>
        <p className='diff'>{endDate.getMonth() + 1}/{endDate.getDate()}</p>
        {click && <p>D-{dayCount}</p>}
      </div>
      <Checkbox checked={checked}
        onClick={() => {
          onToggle(id);
          checked? setDoneCount(doneCount - 1): setDoneCount(doneCount + 1);
        }}
      >
        {checked? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
      </Checkbox>
      <div className="contentWrapper">
        <Text className='title' checked={checked}>{title}</Text>
        {click && <Text checked={checked}>{content}</Text>}
      </div>
      <Remove
        onClick={() => { onRemove(id);}}
      >
        <MdRemoveCircleOutline/>
      </Remove>
    </TodoLsitItemWrapper>
  );
}

export default React.memo(TodoListItem);