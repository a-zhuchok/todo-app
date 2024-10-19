import React from 'react';
import { useDispatch } from 'react-redux';


const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div class="todo">
      <div class='todo_text'  style={{ textDecoration: todo.isСompleted ? 'line-through' : 'none' }}>{`${todo.text}`}</div>
      <div class='todo_buttons'>
        <img class='todo_button' width="30" height="30" src="https://img.icons8.com/pulsar-line/48/edit-text-file.png" alt="edit-text-file" />
        <img class='todo_button'  width="30" height="30" src="https://img.icons8.com/ios/50/delete-sign--v1.png" alt="delete-sign--v1" />
      </div>
    </div>
  )
}

export default Todo;