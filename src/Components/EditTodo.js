import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUpdateTodo } from '../redux/todosSlice';

const EditTodo = ({ todo, isEdit }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(todo.title);
  const handleChange = (event) => {
    setText(event.target.value)
  };
  const update = (todo, text, isEdit) => {
    todo = { ...todo, title: text }
    dispatch(fetchUpdateTodo(todo))
    isEdit=false
  };

  return (
    <div class="editTodo">
      <input type='text' value={text} onChange={handleChange}></input>
      <button onClick={() => update(todo, text, isEdit)}>Update</button>
    </div>
  );
};

export default EditTodo;