import React from 'react';
import { useSelector } from 'react-redux';
import AddTodo from './AddTodo';
import Todo from './Todo';
import EditTodo from './EditTodo'

const TodoList = () => {
  const { todos } = useSelector(state => state.todos);

  return (
    <div class='todoList'>
      <AddTodo />
      <ul>
        {todos.map((todo) => todo.isEdit === true ?
          <li key={todo.id}>{<Todo todo={todo} />}</li> :
          <li key={todo.id}>{<EditTodo todo={todo} />}</li>)}
      </ul>
    </div>
  );
};

export default TodoList;