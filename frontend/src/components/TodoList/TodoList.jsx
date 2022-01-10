import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.css";

const TodoList = ({ todoItemsList, setTodoList }) => {
  const deleteTodoItem = (todoItem) => {
    //const removedTodoItem = todoItemsList.find(item => item.id === todoItem.id)
    setTodoList(todoItemsList.filter((item) => item.id !== todoItem.id));
  };
  if (`${todoItemsList.length}` === "0") {
    return (
      <div className="todoList">
        <div className="todoList__container--empty">No todos at this time!</div>
      </div>
    );
  } else {
    return (
      <div className="todoList">
        <div className="todoList__container">
          {todoItemsList.map((item) => (
            <TodoListItem
              key={item.id}
              todoItem={item}
              onDeleteTodoItem={deleteTodoItem}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default TodoList;
