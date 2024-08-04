import React, { useState } from 'react'

export default function Header({toggleTheme,theme}) {

  return (
    <header className='nav'>
        <div className="logo">
            Todo List
        </div>
        <div className={`theme ${theme}`}>
            <button onClick={()=>toggleTheme('light')}>
                <i className="fa-solid fa-sun"></i>
            </button>
            <button onClick={()=> toggleTheme('dark')}>
                <i className="fa-solid fa-moon"></i>
            </button>
        </div>
    </header>
  )
}
