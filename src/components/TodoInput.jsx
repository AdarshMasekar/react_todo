import React from 'react'

export default function TodoInput({handleAddTodo,inputValue,setInputValue}) {

  return (
    <header className='input-header'>
        <input value={inputValue} onChange={(e)=> setInputValue(e.target.value)} type="text" />
        <button onClick={()=>{handleAddTodo(inputValue)}}>Add</button>
    </header>
  )
}
