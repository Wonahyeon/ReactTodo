import { useState, useEffect, useCallback, useRef} from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { v4 as uuidv4 } from "uuid";

import TodoTemplate from "./component/TodoTemplate";
import TodoInsert from "./component/TodoInsert";
import TodoList from "./component/TodoList";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background: #e9ecef;
  }

  .app-title {
    color: gray;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem 3rem 0;
  }
`;

function App() {
  const [todos, setTodos] = useState([
    {
      id:1, text: 'dd', deadline: 'yymmdd'
    }
  ]);

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
    <div className='app-title'>Todo</div>
    <TodoTemplate >
      <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle}/>
    </TodoTemplate>

    </>
  );
}

export default App;
