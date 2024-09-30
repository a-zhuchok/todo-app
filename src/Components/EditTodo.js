import React from 'react';
import { useDispatch } from 'react-redux';
import { saveEditTodo } from '../redux/actions/todosAction';
import { editTodoText } from '../redux/actions/todosAction';

const EditTodo = ({ todo }) => {
  const dispatch = useDispatch();
  const text = todo.text
  return (
    <div class="editTodo">
      <input type='text' value={text} onChange={e => dispatch(editTodoText(todo, e.target.value))} ></input>
      <button onClick={e => dispatch(saveEditTodo(todo, text))}>Update</button>
    </div>
  );
};

export default EditTodo;