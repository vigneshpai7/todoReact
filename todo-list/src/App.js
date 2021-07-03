// import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { About } from "./MyComponents/About";

import { AddtodoComponent } from "./MyComponents/AddtodoComponent";

import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } 
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    // console.log("delete was clickd",todo)
    settodos(todos.filter((e) => {
        return e!== todo;
      }));
    localStorage.setItem("todos",JSON.stringify(todos));
  };


  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    settodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, settodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
     <Router>
      <Header title="My Todo's List" searchBar={false} />
      <Switch>
          <Route exact path="/" render={()=>{
            return(
              <> 
                <AddtodoComponent addTodo={addTodo} />
           <Todos todos={todos} onDelete={onDelete} />
              
              </>
            )
          }}>
           
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>

      <Footer />
      </Router>
    </>
  );
}
export default App;
