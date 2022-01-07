import './App.css'
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import data from './data/data';

function App() {
  const todoItemsList = data;
  return (
    <div className="App">
      <TodoForm />
      <TodoList todoItemsList={todoItemsList}/>
    </div>
  );
}

export default App;
