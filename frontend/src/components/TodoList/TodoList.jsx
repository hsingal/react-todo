import TodoListItem from '../TodoListItem/TodoListItem'
import './TodoList.css'

const TodoList = () => {
  return (
    <div className='todoList'>
      <div className="todoList__container">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      </div>
      
    </div>
  )
}

export default TodoList
