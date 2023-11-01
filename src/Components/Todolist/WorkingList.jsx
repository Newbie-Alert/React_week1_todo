import React from "react";
import styles from "./WorkingList.module.css";

export default function Working({ todos, taskDone, deleteTask }) {
  // STATES
  // 전역 state를 받아와 isDone의 값이 false인 것들만 filter 합니다.
  let working = [...todos].filter((item) => item.isDone === false);

  // Function
  /** 완료 버튼을 누른 게시물의 ID를 가져와 App.js의 taskDone 함수에 전달합니다 **/
  const makeDone = (e) => {
    const taskId = e.target.dataset.id;
    taskDone(taskId);
  };
  /** 삭제 버튼을 누른 게시물의 ID를 가져와 App.js의 deleteTask 함수에 전달합니다 **/
  const deleteOne = (e) => {
    const taskId = e.target.dataset.id;
    deleteTask(taskId);
  };

  return (
    <div>
      <div className={styles.category}>
        <p>할 일</p>
        <p>내용</p>
        <p>등록 시간</p>
      </div>

      <div className={styles.working_todos}>
        {working.length === 0 ? (
          <div className={styles.todolist_working}>
            <h1 className={styles.if_all_done}>할 일 완료!😆</h1>
          </div>
        ) : (
          <DrawWorkingTodo
            workingTodos={working}
            makeDone={makeDone}
            deleteOne={deleteOne}
          />
        )}
      </div>
    </div>
  );
}

// 진행 중인 항목 UI 컴포넌트
function DrawWorkingTodo({ workingTodos, makeDone, deleteOne }) {
  return workingTodos.map((todo) => {
    const time = todo.id.split(" ");
    const date = `${time[3]} / ${time[1]} ${time[2]} / ${time[4]
      .slice(0, 5)
      .padStart("2", 0)}`;
    return (
      <div key={todo.id}>
        <div className={styles.todo_item}>
          <div className={styles.working_title}>
            <h4>{todo.title}</h4>
          </div>
          <div className={styles.working_text}>
            <p>{todo.text}</p>
          </div>
          <div className={styles.working_id}>
            <p>{date}</p>
          </div>
          <div className={styles.button_box}>
            <button data-id={todo.id} onClick={deleteOne}>
              삭제
            </button>
            <button data-id={todo.id} onClick={makeDone}>
              {todo.isDone === true ? "취소" : "완료"}
            </button>
          </div>
        </div>
      </div>
    );
  });
}
