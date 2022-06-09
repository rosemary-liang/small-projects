import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, toggleComplete, removeTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <Todo todo={todo} key={todo.id} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
      ))}
    </ul>
  )
}
