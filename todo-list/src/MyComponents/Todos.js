import React from 'react'
import {TodoItem} from "./TodoItem";
export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className=" my-3 mx-3">TodoList</h3>
            {props.todos.length===0 ?"No todo to display":
            props.todos.map((todo)=>{
                return  (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> )
            })}
           
        </div>
    )
}
