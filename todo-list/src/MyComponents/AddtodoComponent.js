import React, { useState } from 'react';


export const AddtodoComponent = ({addTodo}) => {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    
    const submit =(e)=>{
     e.preventDefault();
     if(title ||  desc === true){
      addTodo(title,desc)
      settitle("")
      setdesc("")
     }
     else
     {
     alert('sorry')
     }
    
     
    }
    return (
       
        <div className="container">
            <h3><i>Add a Todo</i></h3>
            <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label"> Todo Title</label>
    <input type="text" className="form-control" value={title}  onChange={(e)=>{settitle(e.target.value)}} id="title" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Todo Description</label>
    <input type="text" value={desc}  onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc"/>
  </div>
  <button type="submit" className="btn btn-primary btn-sm btn-successs">Add todo</button>
</form>


        </div>
    )
}
