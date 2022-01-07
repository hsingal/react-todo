import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.css";

const TodoList = ({ todoItemsList }) => {
  console.log(`${todoItemsList.length}`);
  if (`${todoItemsList.length}` === '0') {
    return (
      <div className="todoList">
        <div className="todoList__container--empty">
          No todos at this time!
        </div>
      </div>
    )
  } else {
    return (
      <div className="todoList">
        <div className="todoList__container">
          {todoItemsList.map((item) => (
            <TodoListItem key={item.id} todoItem={item.desc} />
          ))}
        </div>
      </div>
    );
  }
};

export default TodoList;
