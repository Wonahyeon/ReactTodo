import React from 'react';
import styled, { css } from 'styled-components';
import { MdCheckBox, MdCheckBoxOutlineBlank,MdRemoveCircleOutline } from "react-icons/md";
import { MdMode as AddIcon } from "react-icons/md";

const TodoLsitItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;

  .deadlineWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
  }
`;


const Checkbox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    /* 아이콘 스타일링 */
    font-size: 1.5rem;
    color: ${props => props.checked && '#22b8cf'};
  }
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1; // 차지할 수 있는 모든 영역 차지

  ${props => props.checked &&
    css`
      color: #adb5bd;
      text-decoration: line-through;
    `
  }
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

function TodoListItem({todo: {id, title, content, checked, startDate, endDate}, doneCount, setDoneCount,handleDoneCount, onRemove, onToggle}) {
  const today = new Date();
  const dayGap = today.getTime() - endDate.getTime();
  const dayCount = Math.ceil(dayGap / (1000 * 60 * 60 * 24));
  console.log(startDate);

  return (
    <TodoLsitItemWrapper>
      <div className='deadlineWrapper'>
        <p style={{fontWeight:'bold'}}>{endDate.getMonth() + 1}/{endDate.getDate()}</p>
        <p style={{fontSize:'.8rem'}}>D-{dayCount}</p>
      </div>
      <Checkbox checked={checked}
        onClick={() => {
          onToggle(id);
          checked? setDoneCount(doneCount - 1): setDoneCount(doneCount + 1);
        }}
      >
        {checked? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
      </Checkbox>
      <Text checked={checked}>{title}</Text>
      <Text checked={checked}>{content}</Text>
      <Remove
        onClick={() => { onRemove(id);}}
      >
        <MdRemoveCircleOutline/>
      </Remove>
    </TodoLsitItemWrapper>
  );
}

export default React.memo(TodoListItem);