import React from 'react';
import { useDispatch } from 'react-redux';
import { completeTodo, deleteTodo, editTodo } from '../redux/todosSlice';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div class="todo">
      <div class='todo_text' onClick={e => dispatch(completeTodo(todo))} style={{ textDecoration: todo.isСompleted === true ? 'line-through' : 'none' }}>{`${todo.text}`}</div>
      <div class='todo_buttons'>
        <img class='todo_button' onClick={e => dispatch(editTodo(todo))} width="30" height="30" src="https://img.icons8.com/pulsar-line/48/edit-text-file.png" alt="edit-text-file" />
        <img class='todo_button' onClick={e => dispatch(deleteTodo(todo))} width="30" height="30" src="https://img.icons8.com/ios/50/delete-sign--v1.png" alt="delete-sign--v1" />
      </div>
    </div>
  )
}

export default Todo;