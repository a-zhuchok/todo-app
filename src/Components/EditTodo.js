import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveEditTodo } from '../redux/actions/todosAction';

const EditTodo = ({todo}) => {
  const dispatch = useDispatch();
  const { todos } = useSelector(state => state.todos)
  const save = e => {
    e.preventDefault()
    dispatch(saveEditTodo(todo))   
  }
  return (
    <div class="editTodo">
      <input type='text' value={todo.description} ></input>
      <button onClick={e => save(e)}>Update</button>
        </div>
  );
};

export default EditTodo;