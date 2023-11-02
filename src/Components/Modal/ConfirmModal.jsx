import React from "react";
import styles from "./ConfirmModal.module.css";

export default function ConfirmModal({ selected, setTodos, setModal }) {
  // Working component에서 삭제 버튼을 누르면 버튼이 눌린 게시물의 id를 받아와
  // id값이 일치하는 데이터를 찾아 todo state에서 걸러내고
  // todos state를 업데이트
  const deleteTask = (id, setTodos) => {
    setTodos((prev) => [...prev.filter((todo) => todo.id !== id)]);
    setModal(false);
  };

  // 삭제 버튼을 누르면 모달을 닫습니다
  const modalClose = () => setModal(false);
  return (
    <>
      <div className={styles.modal_container}>
        <div className={styles.modal_box}>
          <h4>항목을 삭제하시겠습니까?</h4>
          <div className={styles.modal_button_box}>
            <button
              className={styles.confirm}
              onClick={() => deleteTask(selected, setTodos)}>
              삭제
            </button>
            <button className={styles.cancle} onClick={modalClose}>
              취소
            </button>
          </div>
        </div>
      </div>
      <div className={styles.modal_bg}></div>
    </>
  );
}
