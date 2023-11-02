import React, { useState } from "react";
import styles from "./TodoList.module.css";
import ConfirmModal from "../Modal/ConfirmModal";
import TodoCard from "../TodoCard/TodoCard";

export default function TodoList({ isActive, todos, setTodos }) {
  //========
  // STATES
  //========
  // 전역 state를 받아와 isActive의 값에 따라 분류합니다.
  const list = todos.filter((el) => el.isDone !== isActive);
  const [modal, setModal] = useState(false);
  let [selected, setSelected] = useState("");

  return (
    <>
      {/* TODOLIST */}
      <div className={isActive ? styles.working_todos : styles.done_todos}>
        <div className={isActive ? styles.category : styles.done_category}>
          <p>{isActive ? "할 일" : "완료 항목"}</p>
          <p>내용</p>
          <p>등록 시간</p>
        </div>

        {/* 데이터의 유/무, isActive의 값에 따라 문구와 UI가 변경됩니다. */}
        {list.length === 0 ? (
          <div
            className={
              isActive ? styles.todolist_working : styles.todolist_done
            }>
            <h1 className={isActive ? styles.if_all_done : styles.if_empty}>
              {isActive ? "할 일 완료!😆" : "완료한 항목이 없습니다"}
            </h1>
          </div>
        ) : (
          <TodoCard
            list={list}
            isActive={isActive}
            setModal={setModal}
            setSelected={setSelected}
            setTodos={setTodos}
            todos={todos}
          />
        )}
      </div>

      {/* 모달입니다. */}
      {modal === true ? (
        <ConfirmModal
          setModal={setModal}
          setTodos={setTodos}
          selected={selected}
        />
      ) : null}
    </>
  );
}
