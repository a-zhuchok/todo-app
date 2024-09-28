import React from 'react';
import { v4 as uuidv4 } from 'uuid'
import { useSelector, useDispatch } from 'react-redux';
import { addTodoText } from '../redux/actions/todoTextAction';
import { addNewTodo } from '../redux/actions/todosAction';

const AddTodo = () => {
  const dispatch = useDispatch();
  const { todoText } = useSelector(state => state.todoText); 
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addNewTodo({ id: uuidv4(), text: todoText, isСompleted: false, isEdit: true, })) 
    dispatch(addTodoText('')) 
  }

  return (
    <div class='addTodo'>
    <p class='addTodo_title'>Get things done!</p>
    <div>
      <input class='addTodo_input' value={todoText} onChange={e => dispatch(addTodoText(e.target.value))} />
      <button onClick={e => handleSubmit(e)}>Создать</button>
    </div>
    </div>
  );
};

export default AddTodo;