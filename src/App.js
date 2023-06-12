import { useState, useEffect, useCallback, useRef} from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { v4 as uuidv4 } from "uuid";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoMainPage from "./component/page/TodoMainPage";
import TodoInsertPage from "./component/page/TodoInsertPage";
import TodoListPage from "./component/page/TodoListPage";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background: #e9ecef;
  }
`;

function App() {
  const [todos, setTodos] = useState([
    {
      id:1, text: 'dd', deadline: 'yymmdd'
    }
  ]);
  const [value, setValue] = useState('');
  const [inputEmpty, setInputEmpty] = useState(true); // 할 일 미입력시
  const [startDate, setStartDate] = useState(new Date()); // 시작일
  const [diffDate, setDiffDate] = useState(new Date()); // 마감일


  useEffect(() => {
    const dbTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(dbTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const nextId = useRef(4);

  const handleInsert = useCallback((text) => {
    const todo = {
      id: uuidv4(),
      text,
      check: false
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
        <Route path="/todo-write" element={<TodoInsertPage onInsert={handleInsert} value={value} setValue={setValue} inputEmpty={inputEmpty} setInputEmpty={setInputEmpty} diffDate={diffDate} setDiffDate={setDiffDate} startDate={startDate} setStartDate={setStartDate}/>} />
        <Route path="/todo-list" element={<TodoListPage todos={todos} onRemove={handleRemove} onToggle={handleToggle} diffDate={diffDate} setDiffDate={setDiffDate}/>} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
