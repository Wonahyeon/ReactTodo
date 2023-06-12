import React from 'react';
import styled, { css } from 'styled-components';
import { MdCheckBox, MdCheckBoxOutlineBlank,MdRemoveCircleOutline } from "react-icons/md";

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

function TodoListItem({todo: {id, text, checked}, onRemove, onToggle, startDate, setStartDate, diffDate, setDiffdate}) {
  const deadline = new Date(2023, 9, 1);
  const today = new Date();
  const dayGap = deadline.getTime() - today.getTime();
  const dayCount = Math.ceil(dayGap / (1000 * 60 * 60 * 24));

  return (
    <TodoLsitItemWrapper>
      <div className='deadlineWrapper'>
        <p style={{fontWeight:'bold'}}>{deadline.getMonth()}/{deadline.getDate()}</p>
        <p style={{fontSize:'.8rem'}}>D-{dayCount}</p>
      </div>
      <Checkbox checked={checked}
        onClick={() => { onToggle(id); }}
      >
        {checked? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
      </Checkbox>
      <Text checked={checked}>{text}</Text>
      <Remove
        onClick={() => { onRemove(id); }}
      >
        <MdRemoveCircleOutline/>
      </Remove>
    </TodoLsitItemWrapper>
  );
}

// export default TodoListItem;
// 리액트에서는 기본적으로 부모 컴포넌트가 렌더링되면 모든 자식 컴포넌트들도 무조건 렌더링 된다
// React.memo()를 사용하면 자식 컴포넌트에서 props의 변경이 없을 경우 렌더링 막아준다.
// 사용하는 함수들을 모두 만들어두고 렌더링 시 재사용하는 useCallback()함수를 사용했기 때문에 사용 가능
export default React.memo(TodoListItem);