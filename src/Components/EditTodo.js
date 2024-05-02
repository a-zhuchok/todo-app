import React, { useState } from 'react';

const EditTodo = ({ todo, updateTodo }) => {
    const [text, setText] = useState(todo.title)
    const handleChange = (event) => {
        setText(event.target.value)
    }
    const editTodo = () => {
        todo.title = text
        if (text !== '') {
            updateTodo(todo)
        }
    }

    return (
        <div class="editTodo">
            <input type='text' value={text} onChange={handleChange}></input>
            <button onClick={editTodo}>Update</button>
        </div>
    )
}
export default EditTodo;