import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';
import EditTodo from './EditTodo';
import { Link } from 'react-router-dom';

const TodoList = () => {
    const [todo, setTodo] = useState({})
    const [todos, setTodos] = useState([])
    const token = localStorage.getItem('user')
    useEffect(() => {
        const sendGetToken = async (token) => {
            try {
                const response = await fetch('https://todo-redev.herokuapp.com/api/todos', {
                    method: "GET",
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const userTodos = await response.json()
                setTodos(userTodos)
            } catch (error) {
                console.log("error: ", error)
            }
        }
        sendGetToken(token)
    }, [])
    const addTodo = async (todo) => {
        try {
            const response = await fetch('https://todo-redev.herokuapp.com/api/todos', {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title: todo.title })
            })
            const newTodo = await response.json()
            todo.id = newTodo.id
        } catch (error) {
            console.log("error: ", error)
        }
        setTodo(todo)
        todos.push(todo)
        setTodos(todos)
    }
    const deleteTodo = async (deleteTodo) => {
        try {
            const response = await fetch('https://todo-redev.herokuapp.com/api/todos/' + deleteTodo.id, {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title: deleteTodo.title })
            });
             await response.json()
        } catch (error) {
            console.log("error: ", error)
        }
        setTodos(todos.filter((todo) => todo.id !== deleteTodo.id))
    }
    const completedTodo = async (completedTodo) => {
        try {
            const response = await fetch('https://todo-redev.herokuapp.com/api/todos/' + completedTodo.id + '/isCompleted', {
                method: "PATCH",
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ title: completedTodo.title })
            });
            const data =await response.json()
            console.log(data)
        } catch (error) {
            console.log("error: ", error)
        }
        setTodos(todos.map(todo => {
             if (todo.id === completedTodo.id) {
                return { ...todo, isCompleted: !todo.isCompleted }
            } else {
                return todo
            }
    }))
    }
    const editTodo = (editTodo) => {
        setTodos(todos.map(todo => {
            if (todo.id === editTodo.id) {
                return { ...todo, isEdit: !todo.isEdit }
            } else {
                return todo
            }
        }))
    }
    const updateTodo = async (updateTodo) => {
        setTodos(todos.map(todo => {
            if (todo.id === updateTodo.id) {
                return { ...todo, isEdit: !todo.isEdit }
            } else {
                return todo
            }
        }))
        try {
            const response = await fetch('https://todo-redev.herokuapp.com/api/todos/' + updateTodo.id, {
                method: "PATCH",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title: updateTodo.title })
            });
            await response.json()
        } catch (error) {
            console.log("error: ", error)
        }
    }

    return (
        <div class='todoList'>
            <AddTodo addTodo={addTodo} />
            <ul>
                {todos.map((todo) => todo.isEdit ?
                    <li key={todo.id}>{<EditTodo todo={todo} updateTodo={updateTodo} />}</li> :
                    <li key={todo.id}>{<Todo todo={todo} deleteTodo={deleteTodo} completedTodo={completedTodo} editTodo={editTodo}/>}</li>)}
            </ul>
            <div class="todoForm_loginLink"><Link to="/LoginForm">Log Out!</Link></div>
        </div>
    )
}
export default TodoList;