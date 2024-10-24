import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddTodo from './AddTodo';
import Todo from './Todo';
import { Link } from 'react-router-dom';
import { fetchGetTodos } from '../redux/todosSlice';
import { fetchCompletedTodo } from '../redux/todosSlice';
import { fetchDeleteTodo } from '../redux/todosSlice';

const TodoList = () => {
  const { status, data } = useSelector(state => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    const postData = () => {
      dispatch(fetchGetTodos())
    }
    postData()
  }, [dispatch]);
  const deleteTodo = (todo) => {
    dispatch(fetchDeleteTodo(todo))
  };
  const completeTodo = (todo) => {
    dispatch(fetchCompletedTodo(todo))
  };

  return (
    <div class='todoList'>
      <AddTodo />
      {status === 'loading' && <p>Загрузка...</p>}
      {status === 'succeeded' &&
        <ul>
          {data.map((todo) =>
            <li key={todo.id}>{<Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />}</li>)}
        </ul>}
      <div class="pageLink"><Link to="/LoginForm">Get Out!</Link></div>
    </div>
  );
};

export default TodoList;