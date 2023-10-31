import { useState } from 'react';
import './App.css';
import Nav from './Components/Header/Nav';
import InputComp from './Components/Input/InputComp';
import Working from './Components/Todolist/WorkingList';
import Done from './Components/Todolist/DoneList';

function App() {
  // State
  let [todos, setTodos] = useState([]);

  // Function
  /** Input 컴포넌트에서 제목과 내용을 보내면 task 객체에 담아 todo에 push합니다**/
  const taskMaker = (title, text) => {
    const task = { id: new Date().toString(), title, text, isDone: false };
    let copy = [...todos];
    copy.push(task);
    setTodos(copy);
  }

  /** Working component에서 완료 버튼을 누르면 버튼이 눌린 게시물의 id를 받아와
   * isDone 속성을 true로 바꾸고 todos를 업데이트 합니다. **/
  const taskDone = (id) => {
    let copy = [...todos];
    let completed = copy.find(todo => todo.id === id)
    completed.isDone = true;
    setTodos(copy)
  }

  const restoreTask = (id) => {
    let copy = [...todos];
    let repair = copy.find(todo => todo.id === id);
    repair.isDone = false;
    setTodos(copy)
  }

  /** Working component에서 삭제 버튼을 누르면 버튼이 눌린 게시물의 id를 받아와
   * todos state에서 전달 된 id 값을 가진 게시물을 걸러내고
   * todos state를 업데이트 합니다.**/
  const deleteTask = (id) => {
    let copy = [...todos];
    let filtered = copy.filter(todo => todo.id !== id);
    setTodos(filtered);
  }

  return (
    <div className="App">
      <Nav />
      <InputComp taskMaker={taskMaker} />
      <Working todos={todos} taskDone={taskDone} deleteTask={deleteTask} />
      <Done todos={todos} deleteTask={deleteTask} restoreTask={restoreTask} />
    </div>
  );
}

export default App;
