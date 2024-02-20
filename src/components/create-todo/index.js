 import {useState} from "react";
import {useLocalStorage} from "usehooks-ts"
import styles from "./index.module.css";

function CreateToDo() {
     const [todos, setTodos] = useLocalStorage("TODO_KEY",[]);

    const [todo, setTodo] = useState("");

     //function collectInput(event){
       // todo= event.target.value;
       // setTodo(event.target.value);
     //}

    // const collectInput = event => setTodo(event.target.value);
    
     //function saveTodo(){
        //Get existing list of tools from local storage
        //let tools = JSON.parse(localStorage.getItem("TODO_KEY")) || [];
        //console.log(todos)
        //Add a new todo to existing list of todos
        //Set all todos in local storage
        //setTodos([...todos,todo]);
        
        localStorage.setItem("TODO_KEY", JSON.stringify(todos))
        //saveTodo
    // }
   // function saveTodo(event){
        //console.log(event.target.value);
    //}

    return (
       <section className={styles.createTodoSection}> 
        <input 
        //onChange={collectInput}
        onChange={event => setTodo(event.target.value)} 
         className={styles.createTodoInput}
        placeholder="Start typing....." />
        <button className={`btn ${styles.btn}`} onClick={() => setTodos([...todos, todo])}>Create</button>
       </section>
    );
}

export default CreateToDo;