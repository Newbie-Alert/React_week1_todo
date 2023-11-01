import React from "react";
import styles from "./ConfirmModal.module.css";

export default function ConfirmModal({
  deleteTask,
  selected,
  setTodos,
  modalClose,
}) {
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
