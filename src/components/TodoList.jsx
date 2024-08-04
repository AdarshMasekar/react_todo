import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList({todos,handleDeleteTodo,handleEditTodo}) {
return (
    <ul className='main'>
        {todos.length === 0 ? (
            <p className='todoItem'>No todos available. Add some tasks to get started!</p>
        ):
        (todos.map((todo,index) => {
            return(
                <li key={index}>
                    <TodoCard todo={todo} index={index} handleDeleteTodo={handleDeleteTodo}handleEditTodo={handleEditTodo} >
                    </TodoCard>
                </li>
            )
        }))
    } 
    </ul>
    )
}
