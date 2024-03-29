import { useState, useEffect, useCallback, useRef} from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoMainPage from "./components/pages/TodoMainPage";
import TodoInsertPage from "./components/pages/TodoInsertPage";
import TodoListPage from "./components/pages/TodoListPage";
import TodoEdit from "./components/TodoEdit";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background: #e9ecef;
    font-family: 'default_font',sans-serif;
    /* 드래그 방지 */
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none
  }
  * {
    font-family: 'default_font',sans-serif;

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
    align-items: center;
  }
  .header {
    width: 35rem;
    display: flex;
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
      margin: 0 auto;
      flex: 1;
    }
  }
  // 모바일
  @media screen and (max-width: 420px) {
    .wrapper {
      font-size: 1.2rem;
      min-width: 20rem;
      min-height: 27rem;
      position: relative;
      & > div {
        width: 20rem;
      }
      input, textarea {
        width: 18rem;
      }
      .datePickerWrapper > label {
        width: 8rem;
      }
      .datePickerWrapper input {
        width: 6rem;
      }
      button {
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        bottom: 2rem;
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

  useEffect(() => {
    const dbTodos = JSON.parse(localStorage.getItem('todos')) || [];
    dbTodos.forEach(todo => {
      if(todo.endDate && todo.startDate){
        todo.endDate = new Date(todo.endDate);
        todo.startDate = new Date(todo.startDate);
      }
    });
    setTodos(dbTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos.map(todo => {
      return {
        ...todo,
        endDate: todo.endDate ? todo.endDate.toISOString() : null,
        startDate: todo.startDate ? todo.startDate.toISOString() : null,
      }
    })));
  }, [todos]);

  const nextId = useRef(4);

  const handleInsert = useCallback((title,content, startDate, endDate) => {
    const todo = {
      id: uuidv4(),
      title,
      content,
      checked: false,
      startDate,
      endDate,
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

  const handleModify = useCallback((id, title, content,startDate, endDate) => {
    setTodos(todos => todos.map(todo =>
      todo.id === id ? {...todo, title, content, startDate, endDate} : todo
    ));
  },[]);


  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoMainPage/>} />
        <Route path="/todo-write" element={<TodoInsertPage onInsert={handleInsert} title={title} setTitle={setTitle} content={content} setContent={setContent}  inputEmpty={inputEmpty} setInputEmpty={setInputEmpty} endDate={endDate} setEndDate={setEndDate} startDate={startDate} setStartDate={setStartDate}/>} />
        <Route path="/todo-list" element={<TodoListPage todos={todos} setTodos={setTodos} onRemove={handleRemove} onToggle={handleToggle} endDate={endDate} setEndDate={setEndDate}/>} />
        <Route path="/todo-edit/:todoId" element={<TodoEdit  todos={todos} setTodos={setTodos} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} handleModify={handleModify}/>} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
