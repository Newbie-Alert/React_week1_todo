import React, { useState } from "react";
import styles from "./InputComp.module.css";

export default function InputComp({ setTodos }) {
  // State
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  // Function

  /** Input 컴포넌트에서 제목과 내용을 보내면 task 객체를 생성하여 todo State에 추가하고 todo state를 업데이트**/
  const taskMaker = (title, text) => {
    const task = { id: new Date().toString(), title, text, isDone: false };

    // todos의 이전 값을 가져와 새 배열을 만들고, task를 추가
    setTodos((prev) => [...prev, task]);
  };

  /**title input에 변화가 생길 때마다 title state를 업데이트 합니다.**/
  const titleHandler = (titleValue) => {
    setTitle(titleValue);
  };

  /**text input에 변화가 생길 때마다 text state를 업데이트 합니다.**/
  const textHandler = (textValue) => {
    setText(textValue);
  };

  /** submit event가 일어나면 props로 받은 taskMaker를 호출하여 App.js에서 task를 생성하도록 합니다. **/
  const sendTask = () => {
    taskMaker(title, text);
  };

  return (
    <div className={styles.input_container}>
      <form
        className={styles.input_form}
        onSubmit={(e) => {
          e.preventDefault();
          sendTask();
          setText("");
          setTitle("");
        }}>
        <div className={styles.title_input}>
          <label htmlFor="title">제목:</label>
          <input
            id="title"
            value={title}
            placeholder="제목을 입력하세요"
            required
            type="text"
            onChange={(e) => titleHandler(e.target.value)}
          />
        </div>

        <div className={styles.text_input}>
          <label htmlFor="text">내용:</label>
          <input
            id="text"
            value={text}
            placeholder="내용을 입력하세요"
            required
            type="text"
            onChange={(e) => textHandler(e.target.value)}
          />
        </div>
        <button>추가하기</button>
      </form>
    </div>
  );
}
