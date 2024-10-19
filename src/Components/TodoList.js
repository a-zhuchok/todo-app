import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddTodo from './AddTodo';
import Todo from './Todo';
import EditTodo from './EditTodo';
import { Link } from 'react-router-dom';
import {fetchGetTodos} from '../redux/todosSlice'


const TodoList = () => {
  const { status, data} = useSelector(state => state.todos)
  const dispatch = useDispatch()
  
  useEffect(() => {
      dispatch(fetchGetTodos())
  }, [dispatch])
  return (
    <div class='todoList'>
      <AddTodo />
      <ul>
        {data.map((todo)=>
        <li>{todo.title}</li>)}
      </ul>
    </div>
  );
};

export default TodoList;