import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
    return (
        <>
        <div>

        <h4>{todo.title}</h4>
        <h4>{todo.desc}</h4>
        <button className="btn btn-danger" onClick={()=>{onDelete(todo)}}>delete</button><br />
   
        </div>
          <hr />
          </>
    )
}
