import React, { useState } from 'react';
import EditTodo from '../Components/EditTodo';

const Todo = ({ todo, deleteTodo, completeTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const edit = () => {
    setIsEdit(!isEdit)
  };

  return (
    <div>
      {isEdit ? <EditTodo todo={todo} isEdit={isEdit}/> :
        <div class="todo">
          <div class='todo_text' onClick={() => completeTodo(todo)} style={{ textDecoration: todo.isСompleted === true ? 'line-through' : 'none' }}>{`${todo.title}`}</div>
          <div class='todo_buttons'>
            <img class='todo_button' onClick={() => edit()} width="30" height="30" src="https://img.icons8.com/pulsar-line/48/edit-text-file.png" alt="edit-text-file" />
            <img class='todo_button' onClick={() => deleteTodo(todo)} width="30" height="30" src="https://img.icons8.com/ios/50/delete-sign--v1.png" alt="delete-sign--v1" />
          </div>
        </div>}
    </div>
  )
}

export default Todo;