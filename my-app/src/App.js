import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
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
  <div className="w-full min-h-screen flex justify-center content-center">
    <div className="bg-[#12343b] min-w-full min-h-full p-4 box-border rounded-md">
      <div>
        <Header />
      </div>
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
