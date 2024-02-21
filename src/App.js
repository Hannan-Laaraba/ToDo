import React from "react"
import Header from "./components/header";
import CreateToDo from "./components/create-todo";
import ToDoList from "./components/todo-list";

function App() {
  return (
    <React.Fragment>
       <Header/>
       <CreateToDo/>
       <ToDoList/>
    </React.Fragment>
   
  );
    
}

export default App;
