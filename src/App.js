import React from 'react';
import Logo from './Components/Logo';
import TodoList from './Components/TodoList';
import './App.css';
import SignForm from './Components/SignForm';

const App = () => {

  return (
    <div class='container'>
      <Logo/>
       <SignForm/>
    </div>
  );
}
export default App;