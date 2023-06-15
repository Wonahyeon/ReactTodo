import { useState, useEffect, useCallback, useRef} from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { v4 as uuidv4 } from "uuid";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoMainPage from "./component/page/TodoMainPage";
import TodoInsertPage from "./component/page/TodoInsertPage";
import TodoListPage from "./component/page/TodoListPage";
import TodoEdit from "./component/TodoEdit";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background: #e9ecef;
  }
  .wrapper {
    min-width: 40rem;
    min-height: 30rem;
    margin: 0 auto;
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 1.5rem;
    background: white;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }
  .header {
    width: 40rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
    svg {
      color: gray;
      cursor: pointer;
    }
    svg:hover {
      color: black;
    }
    .title {
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
      flex: 1;
    }
  }
  // 모바일
  @media screen and (max-width: 360px) {
    .wrapper {
      width: 20rem;
      .header {
        width: 20rem;
      }
      .header svg:first-child {
        display: none;
      }
    }
  }
`;

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState(''); // todo tile
  const [content, setContent] = useState(''); // todo content
  const [inputEmpty, setInputEmpty] = useState(true); // todo title 입력 상태
  const [startDate, setStartDate] = useState(new Date()); // todo start date
  const [endDate, setEndDate] = useState(new Date()); // todo end date
  const [titleClick, setTitleClick] = useState(false);
  const [dateClick, setDateClick] = useState(false);

  useEffect(() => {
    const dbTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(dbTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const nextId = useRef(4);

  const handleInsert = useCallback((title,content, startDate, endDate) => {
    const todo = {
      id: uuidv4(),
      title,
      content,
      checked: false,
      startDate,
      endDate
    };

    setTodos(todos => todos.concat(todo));
    nextId.current += 1;
  }, []);

  const handleRemove = useCallback((id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, []);

  const handleToggle = useCallback((id) => {
    setTodos(todos => todos.map(todo =>
      todo.id === id? {...todo, checked: !todo.checked} : todo
      ));
  }, []);

  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoMainPage/>} />
        <Route path="/todo-write" element={<TodoInsertPage onInsert={handleInsert} title={title} setTitle={setTitle} content={content} setContent={setContent}  inputEmpty={inputEmpty} setInputEmpty={setInputEmpty} endDate={endDate} setEndDate={setEndDate} startDate={startDate} setStartDate={setStartDate}/>} />
        <Route path="/todo-list" element={<TodoListPage todos={todos} setTodos={setTodos} onRemove={handleRemove} onToggle={handleToggle} endDate={endDate} setEndDate={setEndDate} />} />
        <Route path="/todo-edit" element={<TodoEdit/>} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
