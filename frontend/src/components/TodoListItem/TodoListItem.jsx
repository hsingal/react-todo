import "./TodoListItem.css";

const TodoListItem = ({todoItem}) => {
  return (
    <div className="todoListItem">
      <div className="todoListItem__wrapper">
        <label className="todoListItem__wrapper--label">{todoItem}</label>
        <div className="todoListItem__wrapper--buttons">
          <button className="todoListItem__wrapper--edit">Edit</button>
          <button className="todoListItem__wrapper--delete">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodoListItem;
