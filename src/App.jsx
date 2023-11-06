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
      {/* 변수나 state가 아니더라도 props를 전송할 수 있다. */}
      <TodoList isActive={true} todos={todos} setTodos={setTodos} />
      <TodoList isActive={false} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
