import React, { useState } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';
import EditTodo from './EditTodo';

const TodoList = () => {
    const [todo, setTodo] = useState({})
    const [todos, setTodos] = useState([])
    const addTodo = (todo) => {
        setTodo(todo)
        todos.push(todo)
        setTodos(todos)
    }

    const deleteTodo = (deleteTodo) => {
        setTodos(todos.filter((todo) => todo.id !== deleteTodo.id))
    }

    const completedTodo = (completedTodo) => {
        setTodos(todos.map(todo => {
            if (todo.id === completedTodo.id) {
                return { ...todo, isСompleted: !todo.isСompleted };
            } else {
                return todo;
            }
        }))
    }

    const editTodo = (editTodo) => {
        setTodos(todos.map(todo => {
            if (todo.id === editTodo.id) {
                return { ...todo, isEdit: !todo.isEdit };
            } else {
                return todo;
            }
        }))
    }

    const updateTodo = (updateTodo) => {
        setTodos(todos.map(todo => {
            if (todo.id === updateTodo.id) {
                return { ...todo, isEdit: !todo.isEdit };
            } else {
                return todo;
            }
        }))
    }

    return (
        <div class='todoList'>
            <AddTodo addTodo={addTodo}/>
            <ul>
                {todos.map((todo) => todo.isEdit === true ?
                    <li key={todo.id}>{<Todo todo={todo} deleteTodo={deleteTodo} completedTodo={completedTodo} editTodo={editTodo}/>}</li> :
                    <li key={todo.id}>{<EditTodo todo={todo} updateTodo={updateTodo}/>}</li>)}
            </ul>
        </div>
    )
}

export default TodoList;