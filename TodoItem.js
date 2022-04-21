import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div>
           <h4>{todo.title}</h4>
           <p>{todo.desc}</p>
           <button className="BUTTON-1" onClick={()=>{onDelete(todo)}}>Delete</button> 
        </div>
        <hr/> 
        </>
    )
}
