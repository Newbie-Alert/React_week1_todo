import React from "react";
import styles from "./DoneList.module.css";

export default function Done({ todos, deleteTask, restoreTask }) {
  // STATES
  // 전역 state를 받아와 isDone의 값이 true인 것들만 filter 합니다.
  let doneTodos = [...todos].filter((item) => item.isDone === true);

  // Function
  /** 삭제 버튼을 누른 게시물의 ID를 가져와 App.js의 deleteTask 함수에 전달합니다 **/
  const deleteOne = (e) => {
    const taskId = e.target.dataset.id;
    deleteTask(taskId);
  };
  /** 취소 버튼을 누른 게시물의 ID를 가져와 App.js의 restoreTask 함수에 전달합니다 **/
  const restoreOne = (e) => {
    const taskId = e.target.dataset.id;
    restoreTask(taskId);
  };

  return (
    <div>
      <div className={styles.category}>
        <p>완료 항목</p>
        <p>내용</p>
        <p>등록 시간</p>
      </div>

      <div className={styles.done_todos}>
        {doneTodos.length === 0 ? (
          <div className={styles.todolist_done}>
            <h1 className={styles.if_empty}>완료한 항목이 없습니다</h1>
          </div>
        ) : (
          <DrawDoneTodo
            doneTodos={doneTodos}
            deleteOne={deleteOne}
            restoreOne={restoreOne}
          />
        )}
      </div>
    </div>
  );
}

// 완료 항목 UI 컴포넌트
function DrawDoneTodo({ doneTodos, deleteOne, restoreOne }) {
  return doneTodos.map((todo) => {
    return (
      <div key={todo.id}>
        <div className={styles.todo_item}>
          <div className={styles.done_title}>
            <h4>{todo.title}</h4>
          </div>
          <div className={styles.done_text}>
            <p>{todo.text}</p>
          </div>
          <div className={styles.done_id}>
            <p>{todo.id.slice(0, 15)}</p>
          </div>
          <div className={styles.button_box}>
            <button data-id={todo.id} onClick={deleteOne}>
              삭제
            </button>
            <button data-id={todo.id} onClick={restoreOne}>
              {todo.isDone === true ? "취소" : "완료"}
            </button>
          </div>
        </div>
      </div>
    );
  });
}
