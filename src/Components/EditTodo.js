import React from 'react';
import { useDispatch } from 'react-redux';
import { editTodoText } from '../redux/todosSlice';
import { saveEditTodo } from '../redux/todosSlice';

const EditTodo = ({ todo }) => {
  const dispatch = useDispatch();
  const text = todo.text
  return (
    <div class="editTodo">
      <input type='text' value={text} onChange={e => dispatch(editTodoText({ todo: todo, text: e.target.value }))}></input>
      <button onClick={e => dispatch(saveEditTodo({ todo: todo, text: text }))}>Update</button>
    </div>
  );
};

export default EditTodo;