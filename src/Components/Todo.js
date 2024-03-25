import React from 'react';

const Todo=({todo, deleteTodo, completedTodo, editTodo})=> {

    return (
        <div class="todo">
            <div class='todo_text' onClick={()=>completedTodo(todo)} style={{ textDecoration: todo.isСompleted === true ? 'line-through' : 'none' }}>{`${todo.description}`}</div>
             <div class='todo_buttons'>
                <img class='todo_button' onClick={()=>editTodo(todo)} width="30" height="30" src="https://img.icons8.com/pulsar-line/48/edit-text-file.png" alt="edit-text-file"/>
                <img class='todo_button' onClick={()=>deleteTodo(todo)} width="30" height="30" src="https://img.icons8.com/ios/50/delete-sign--v1.png" alt="delete-sign--v1"/>
            </div>
        </div>
    )
}

export default Todo;