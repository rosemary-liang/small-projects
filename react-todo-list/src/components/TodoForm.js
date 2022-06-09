import React, {useState} from 'react';


function TodoForm ({ addTodo }) {
  const [todo, setTodo] = useState( {
    id: 0,
    task: '',
    completed: false
  })


  function handleInputChange (e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit (e) {
    e.preventDefault();
    // if todo.task is valid, trim off whitespaces and add todo with new ID
    if (todo.task.trim()) {
      addTodo({ ...todo, id: todo.id++ });
    }
    // reset task input to emptuy string
    setTodo({ ...todo, task: '' });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
      name='task'
      type='text'
      onChange={handleInputChange}
      value={todo.task} />
      <button type='submit'>submit</button>
    </form>
  )
}
export default TodoForm;
