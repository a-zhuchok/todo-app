import React from 'react';
import { useDispatch } from 'react-redux';


const EditTodo = ({ todo }) => {
  const dispatch = useDispatch();
  const{text}=todo;
  
  return (
    <div class="editTodo">
      <input type='text' value={text}></input>
      <button>Update</button>
    </div>
  );
};

export default EditTodo;