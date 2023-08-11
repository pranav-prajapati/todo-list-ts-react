import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { ITodo } from './interface/InputFeild.interface';
import TodoCards from './components/TodoCards';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<ITodo[]>([])

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, { id: Date.now().toString(), todo, isDone: false }]);
      setTodo("");
    }
  }

  return (
    <div className="App">
      
        <span className='App-header'>Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} /> 
        <TodoCards todos={todos} setTodos={setTodos}/>
      
    </div>
  );
}

export default App;
