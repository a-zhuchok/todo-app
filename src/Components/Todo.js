import React from 'react';
import {  useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/actions/todosAction';
import { completedTodo } from '../redux/actions/todosAction';
import { editTodo } from '../redux/actions/todosAction';

const Todo=({todo})=> {
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(deleteTodo(todo))  
      }
      const completed = e => {
        e.preventDefault()
        dispatch(completedTodo(todo)) 
      }
      const edit = e => {
        e.preventDefault()
        dispatch(editTodo(todo))   
      }
    return (
        <div class="todo">
        <div class='todo_text' onClick={e => completed(e)} style={{ textDecoration: todo.isСompleted === true ? 'line-through' : 'none' }}>{`${todo.text}`}</div>
         <div class='todo_buttons'>
            <img class='todo_button' onClick={e => edit(e)} width="30" height="30" src="https://img.icons8.com/pulsar-line/48/edit-text-file.png" alt="edit-text-file"/>
            <img class='todo_button' onClick={e => handleSubmit(e)} width="30" height="30" src="https://img.icons8.com/ios/50/delete-sign--v1.png" alt="delete-sign--v1"/>
        </div>
    </div>
    )
}

export default Todo;