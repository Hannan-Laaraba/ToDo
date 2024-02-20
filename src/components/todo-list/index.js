import {useState, useEffect } from "react";
import {useLocalStorage} from "usehooks-ts";
import TodoItem from "../todo-item";

function TodoList() {
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
            return <TodoItem todo={todo} index={index} />
            })}
        </ul>
    );
}

export default TodoList;
