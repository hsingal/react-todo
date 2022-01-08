import "./TodoListItem.css";

const TodoListItem = ({ todoItem, onDeleteTodoItem }) => {
  const handleDeleteButton = (e) => {
    e.preventDefault();
    onDeleteTodoItem(todoItem);
  };
  return (
    <div className="todoListItem">
      <div className="todoListItem__wrapper">
        <label className="todoListItem__wrapper--label">{todoItem.desc}</label>
        <div className="todoListItem__wrapper--buttons">
          <button className="todoListItem__wrapper--edit">Edit</button>
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
