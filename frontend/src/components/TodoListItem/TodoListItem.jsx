import { useRef, useState } from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todoItem, onDeleteTodoItem}) => {
  const editTextRef = useRef(null);

  const labelDisplayClassName = "todoListItem__wrapper--label";
  const editTextDisplayClassName = "todoListitem__wrapper--editText";

  const [isEditClicked, setIsEditClicked] = useState(false);
  const [updateText, setUpdateText] = useState(todoItem.desc);

  const handleDeleteButton = (e) => {
    e.preventDefault();
    onDeleteTodoItem(todoItem);
  };

  const handleEditButton = (e) => {
    setIsEditClicked(true);
    console.log(isEditClicked);
    if (isEditClicked) {
      editTextRef.current.focus();
      todoItem.desc = updateText;
      setIsEditClicked(false);
      //onEditTodoItem(todoItem);
    }
  };

  const handleEditText = (e) => {
    console.log("value " + e.target.value);
    setUpdateText(e.target.value);
  };

  return (
    <div className="todoListItem">
      <div className="todoListItem__wrapper">
        <label
          className={
            isEditClicked
              ? labelDisplayClassName + " hide"
              : labelDisplayClassName
          }
        >
          {todoItem.desc}
        </label>
        <input
          ref={editTextRef}
          defaultValue={todoItem.desc}
          type="text"
          className={
            isEditClicked
              ? editTextDisplayClassName + " show"
              : editTextDisplayClassName
          }
          onChange={handleEditText}
        />
        <div className="todoListItem__wrapper--buttons">
          <button
            className="todoListItem__wrapper--edit"
            onClick={handleEditButton}
          >
            Edit
          </button>
          <button
            className="todoListItem__wrapper--delete"
            onClick={handleDeleteButton}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoListItem;
