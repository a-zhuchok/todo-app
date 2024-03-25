import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddTodo=({addTodo})=>{
  const [text, setText] = useState('')
  const handleChange = (event) => {
    setText(event.target.value);
  }

  const addTask = () => {
    const newTodo = {
      id: uuidv4(),
      description: text,
      isСompleted: false,
      isEdit: true,
    }
    if (text !== '' ) {
      addTodo(newTodo)
      setText("")
  }}

return (
  <div class='addTodo'>
    <p class='addTodo_title'>Get things done!</p>
    <div>
      <input class='addTodo_input' type='text' value={text} onChange={handleChange} placeholder="What is the task today?"></input>
      <button onClick={addTask}>Add Task</button>
    </div>
  </div>
)}

export default AddTodo;