import { useState } from "react";
import "./App.css";
import Nav from "./components/Header/Nav";
import InputComp from "./components/Input/InputComp";
import TodoList from "./components/Todolist/TodoList";

function App() {
  // State
  let [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Nav />
      <InputComp setTodos={setTodos} />
      <TodoList isActive={true} todos={todos} setTodos={setTodos} />
      <TodoList isActive={false} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
