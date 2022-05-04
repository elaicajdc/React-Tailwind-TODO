import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Stats from './components/Stats';
import TodosList from './components/TodosList';

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
  <div className="w-screen min-h-screen flex-bottom justify-center content-center">
      <div>
        <Stats todos={todos}/>
      </div>
      <div>
        <Header />
      </div>
    <div className="bg-[#ffff] min-w-full h-full p-4 box-border">
      <div>
        <Form 
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        />
      </div>
      <div>
        <TodosList todos={todos} setTodos={setTodos} 
        setEditTodo={setEditTodo}/>
      </div>
    </div>
  </div>
  );
}

export default App;
