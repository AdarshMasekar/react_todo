import React from 'react'

export default function TodoCard({todo,index,handleDeleteTodo,handleEditTodo}) {
  return (
    <div className='todoItem'>
            <p>
                {todo}
            </p>
            <div className="actionsContainer">
                <button onClick={()=>handleEditTodo(index)}>
                    <i className="fa-solid fa-pen-to-square"></i>   
                </button>
                <button onClick={()=>handleDeleteTodo(index)}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div> 
    </div>
  )
}
