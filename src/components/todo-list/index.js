import {useState, useEffect } from "react";
import {useLocalStorage} from "usehooks-ts";

function ToDoList() {
    //let todos = ["go jogging","cook lunch"]
    const [todos, setTodos] = useLocalStorage("TODO_KEY", []);

    //let todos;
    //function getTodos(){
        //Get all todos from local storage and store it.
       // let todos = JSON.parse(localStorage.getItem("TODO_KEY"));
        //Update React State
       // setTodos(todos);
    

   // useEffect(getTodos, []);

    return (
        <ul className= "list-group">
            {todos.map(function(todo, index){
            return <li className="list-group-item" key= {index}>
              <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              id={index} />
              <label
              className="form-check-label"
              for={index}
               >{todo}</label>
               </li>
            })}
        </ul>
      // </div>
    );
}

export default ToDoList;
