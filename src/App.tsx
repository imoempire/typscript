import React, { useState } from "react";
import "./App.css";
import InputFeild from "./Components/InputFiled";
import { Todo } from "./Components/Model/Model";
import TodoList from "./Components/TodoList/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  // console.log(todos);

  return (
    <div className="App">
      <span className="heading">Tasks</span>
      <InputFeild handleAdd={handleAdd} todo={todo} setTodo={setTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
