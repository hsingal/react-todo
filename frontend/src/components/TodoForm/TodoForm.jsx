import { useState } from "react";
import "./TodoForm.css";

const TodoForm = ({ todoList, setTodoList }) => {
  const [inputText, setInputText] = useState("");

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      { id: new Date(Date.now()).getTime(), desc: inputText },
    ]);
    setInputText("");
  };
  return (
    <div className="todoForm">
      <div className="todoForm__container">
        <input
          value={inputText}
          className="todoForm__container--inputField"
          type="text"
          placeholder="Enter your todo task"
          onChange={handleInputText}
        />
        <button
          className="todoForm__container--button"
          onClick={handleButtonClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
