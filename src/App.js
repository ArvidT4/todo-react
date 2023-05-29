
import React, { useState } from 'react';
import './App.css';
import Test from './components/Test';
import testContext from './components/textContext';
import Todos from './components/Todos';

function App() {
  const [test, setTest] = useState("")
  const [todos, setTodos] = useState([])

  return (
    <testContext.Provider value={{test, setTest, todos, setTodos}}>
    <div className="App">
      <Test></Test>
      <Todos></Todos>

    </div>
    </testContext.Provider>
  );
}

export default App;
