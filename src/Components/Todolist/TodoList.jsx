import React, { useState } from "react";
import styles from "./TodoList.module.css";
import ConfirmModal from "../Modal/ConfirmModal";

export default function TodoList({ isActive, todos, setTodos }) {
  //========
  // STATES
  //========
  // 전역 state를 받아와 isActive의 값에 따라 분류합니다.
  const list = [...todos].filter((el) => el.isDone !== isActive);
  const [modal, setModal] = useState(false);
  let [selected, setSelected] = useState("");

  //===========
  // Functions
  //===========
  // Working component에서 완료 버튼을 누르면 타겟 게시물의 id를 받아와
  // id값이 일치하는 데이터를 찾아 isDone 값을 true로 바꾸고 todo state를 업데이트.
  const taskDone = (id, setTodos) => {
    let copy = [...todos];
    let completed = copy.find((todo) => todo.id === id);

    // 완료 버튼을 누를 시 완료 버튼을 누른 시간으로 업데이트
    completed.id = new Date().toString();
    // 완료 버튼을 누른 객체의 isDone 속성을 true로 업데이트
    completed.isDone = true;
    setTodos(copy);
  };

  // 완료 버튼을 누른 게시물의 ID를 가져와 App.js의 taskDone 함수에 전달합니다
  const makeDone = (e) => {
    const taskId = e.target.dataset.id;
    taskDone(taskId, setTodos);
  };

  // 삭제 버튼을 누른 게시물의 ID를 가져와 App.js의 deleteTask 함수에 전달합니다
  const sendDeleteOne = (e) => {
    setSelected(e.target.dataset.id);
    setModal(true);
  };

  // Working component에서 삭제 버튼을 누르면 버튼이 눌린 게시물의 id를 받아와
  // id값이 일치하는 데이터를 찾아 todo state에서 걸러내고
  // todos state를 업데이트
  const deleteTask = (id, setTodos) => {
    setTodos((prev) => [...prev.filter((todo) => todo.id !== id)]);
    setModal(false);
  };

  /** 취소 버튼을 누른 게시물의 ID를 가져와 App.js의 restoreTask 함수에 전달합니다 **/
  const sendRestoreOne = (e) => {
    const taskId = e.target.dataset.id;
    restoreTask(taskId);
  };

  // 완료 버튼을 누른 객체의 isDone 속성을 true로 업데이트
  const restoreTask = (id) => {
    let copy = [...todos];
    let repair = copy.find((todo) => todo.id === id);
    repair.isDone = false;
    setTodos(copy);
  };

  const modalClose = () => setModal(false);

  return (
    <>
      {/* TODOLIST */}
      {/* WorkingTodo */}
      {isActive === true ? (
        <div className={styles.working_todos}>
          <div className={styles.category}>
            <p>할 일</p>
            <p>내용</p>
            <p>등록 시간</p>
          </div>
          <div className={styles.working_todos}>
            {/* 데이터가 없다면 '할 일 완료!'😆가 화면에 렌더합니다 */}
            {list.length === 0 ? (
              <div className={styles.todolist_working}>
                <h1 className={styles.if_all_done}>할 일 완료!😆</h1>
              </div>
            ) : (
              // 데이터가 있다면 데이터의 길이만큼 화면을 그립니다.
              <DrawTodoList
                list={list}
                makeDone={makeDone}
                sendDeleteOne={sendDeleteOne}
                setTodos={setTodos}
                setSelected={setSelected}
                isActive={isActive}
              />
            )}
          </div>
        </div>
      ) : (
        // DONE TODO
        <div className={styles.done_todos}>
          <div className={styles.done_category}>
            <p>완료 항목</p>
            <p>내용</p>
            <p>완료 시간</p>
          </div>
          <div className={styles.done_todos}>
            {/* 데이터가 없다면 '완료한 항목이 없습니다'가 화면에 렌더합니다 */}
            {list.length === 0 ? (
              <div className={styles.todolist_done}>
                <h1 className={styles.if_empty}>완료한 항목이 없습니다</h1>
              </div>
            ) : (
              // 데이터가 있다면 데이터의 길이만큼 화면을 그립니다.
              <DrawTodoList
                list={list}
                sendDeleteOne={sendDeleteOne}
                sendRestoreOne={sendRestoreOne}
                setTodos={setTodos}
                setSelected={setSelected}
              />
            )}
          </div>
        </div>
      )}

      {modal === true ? (
        <ConfirmModal
          deleteTask={deleteTask}
          setTodos={setTodos}
          selected={selected}
          modalClose={modalClose}
        />
      ) : null}
    </>
  );
}

// UI 컴포넌트
function DrawTodoList({
  isActive,
  list,
  makeDone,
  sendDeleteOne,
  sendRestoreOne,
  setTodos,
}) {
  return list.map((todo) => {
    const time = todo.id.split(" ");
    const date = `${time[3]} / ${time[1]} ${time[2]} / ${time[4]
      .slice(0, 5)
      .padStart("2", 0)}`;

    return (
      <div key={todo.id}>
        <div className={styles.todo_item}>
          <div className={isActive ? styles.working_title : styles.done_title}>
            <h4>{todo.title}</h4>
          </div>
          <div className={isActive ? styles.working_text : styles.done_title}>
            <p>{todo.text}</p>
          </div>
          <div className={isActive ? styles.working_id : styles.done_id}>
            <p>{date}</p>
          </div>
          <div className={styles.button_box}>
            <button
              data-id={todo.id}
              onClick={(e) => sendDeleteOne(e, setTodos)}>
              삭제
            </button>
            <button
              data-id={todo.id}
              onClick={isActive ? makeDone : sendRestoreOne}>
              {todo.isDone === true ? "취소" : "완료"}
            </button>
          </div>
        </div>
      </div>
    );
  });
}
