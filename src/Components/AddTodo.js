import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('')
  const handleChange = (event) => {
    setText(event.target.value);
  }
  const addTask = () => {
    const newTodo = {
      title: text,
      isEdit: false,
    }
    if (text !== '') {
      addTodo(newTodo)
      setText("")
    }
  }

  return (
    <div class='addTodo'>
      <p class='addTodo_title'>Get things done!</p>
      <div>
        <input class='addTodo_input' type='text' value={text} onChange={handleChange} placeholder="What is the task today?"></input>
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  )
}
export default AddTodo;