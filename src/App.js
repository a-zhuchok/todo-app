import React from 'react';
import Logo from './Components/Logo';
import TodoList from './Components/TodoList';
import SignForm from './Components/SignForm';
import LoginForm from './Components/LoginForm'
import { Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {

  return (
    <div class='container'>
      <Logo/>
      <Routes>
      <Route path="*" element={<SignForm/>} />
      <Route path="/LoginForm" element={<LoginForm/>} />
      <Route path="/TodoList" element={<TodoList/>} />
      </Routes>
    </div>
  );
}
export default App;