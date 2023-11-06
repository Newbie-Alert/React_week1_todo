import React from "react";
import styles from "./TodoCard.module.css";

export default function TodoCard({
  list,
  isActive,
  setModal,
  setSelected,
  setTodos,
  todos,
}) {
  return list.map((todo) => {
    const time = todo.id.split(" ");
    const date = `${time[3]} / ${time[1]} ${time[2]} / ${time[4]
      .slice(0, 5)
      .padStart("2", 0)}`;

    //===========
    // FUNCTIONS
    //===========
    const sendDeleteOne = (e) => {
      setSelected(e.target.dataset.id);
      setModal(true);
    };

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

    // 취소 버튼을 누른 게시물의 ID를 가져와 App.js의 restoreTask 함수에 전달합니다
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

    // isActive에 따라 filter된 데이터로 UI를 그립니다
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
