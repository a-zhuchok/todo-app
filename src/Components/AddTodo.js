import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { addTodoText } from '../redux/todoTextSlice';
import { addNewTodo } from '../redux/todosSlice';

const AddTodo = () => {
  const dispatch = useDispatch();
  const { todoText } = useSelector(state => state.todoText);
  const addTodo = e => {
    dispatch(addNewTodo({ id: uuidv4(), text: todoText, isСompleted: false, isEdit: false, }))
    dispatch(addTodoText(''))
  }
  
  return (
    <div class='addTodo'>
      <p class='addTodo_title'>Get things done!</p>
      <div>
        <input class='addTodo_input' value={todoText} onChange={e => dispatch(addTodoText(e.target.value))} />
        <button onClick={e => addTodo(e)}>Создать</button>
      </div>
    </div>
  );
};

export default AddTodo;