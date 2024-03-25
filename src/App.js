import React from 'react';
import Logo from './Components/Logo';
import TodoList from './Components/TodoList';
import './App.css';

const App = () => {
 
  return (
    <div class='container'>
      <Logo />
      <TodoList/>
    </div>
  );
}

export default App;
