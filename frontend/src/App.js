import { useState } from 'react';
import './App.css'
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import data from './data/data';

function App() {
  const [todoList, setTodoList] = useState([])
  return (
    <div className="App">
      <TodoForm todoList={todoList} setTodoList={setTodoList}/>
      <TodoList todoItemsList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
