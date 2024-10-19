import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { addTodoText } from '../redux/todoTextSlice';
import { fetchAddTodo } from '../redux/todosSlice';

const AddTodo = () => {
  const dispatch = useDispatch();
  const { todoText } = useSelector(state => state.todoText);
  const addTodo = e => {
    if(todoText.trim() !== ""){
    dispatch(fetchAddTodo({ id: uuidv4(), title: todoText, isСompleted: false, isEdit: false, }))}
    dispatch(addTodoText(''))
  }
  
  return (
    <div class='addTodo'>
      <p class='addTodo_title'>Get things done!</p>
      <div>
        <input class='addTodo_input' value={todoText} onKeyPress={e => e.key==="Enter"?addTodo(e):false} onChange={e => dispatch(addTodoText(e.target.value))} />
        <button onClick={e => addTodo(e)}>Создать</button>
      </div>
    </div>
  );
};

export default AddTodo;