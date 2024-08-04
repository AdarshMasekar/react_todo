import React, { useEffect, useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  let [theme,setTheme] = useState('light');
  let [inputValue, setInputValue] = useState('');
  let [todos, setTodos] = useState([]);

  useEffect(() => {
    persistData();
  }, []);

  function persistData() {
    let todosList = localStorage.getItem('todosList');
    if (todosList) {
      try {
        setTodos(JSON.parse(todosList)); // Parse JSON string into array
      } catch (error) {
        console.error("Invalid JSON data in localStorage, resetting...", error);
        localStorage.removeItem('todosList'); // Clear the invalid data
      }
    }
  }

  function handleAddTodo(newTodo) {
    if(newTodo === ''){
      return
    }
    let newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setInputValue('');
    localStorage.setItem('todosList', JSON.stringify(newTodos)); // Stringify and store the array
  }

  function handleEditTodo(index) {
    let todoByIndex = todos[index];
    setInputValue(todoByIndex);
    handleDeleteTodo(index);
  }

  function handleDeleteTodo(index) {
    let newTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
    localStorage.setItem('todosList', JSON.stringify(newTodos)); // Update localStorage
  }

  function toggleTheme(newTheme){
    setTheme(newTheme);
  }

  return (
    <main className={`app ${theme}`}>
      <div className={`bg ${theme}`}>
        <Header toggleTheme={toggleTheme} theme={theme}/>
        <TodoInput handleAddTodo={handleAddTodo} inputValue={inputValue} setInputValue={setInputValue} />
      </div>
      <TodoList todos={todos} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} />
      <Footer/>
    </main>
  );
}
