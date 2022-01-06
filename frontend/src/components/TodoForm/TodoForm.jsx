import './TodoForm.css'

const TodoForm = () => {
  return (
    <div className='todoForm'>
      <div className="todoForm__container">
        <input className="todoForm__container--inputField" type="text" placeholder="Enter your todo task"/>
        <button className='todoForm__container--button'>Submit</button>
      </div>
    </div>
  )
}

export default TodoForm
