 import {useState} from "react";
import {useLocalStorage} from "usehooks-ts"
import styles from "./index.module.css";

function CreateToDo() {
     const [todos, setTodos] = useLocalStorage("TODO_KEY",[]);

    const [todo, setTodo] = useState("");

        
        localStorage.setItem("TODO_KEY", JSON.stringify(todos))
      

    return (
       <section className={styles.createTodoSection}> 
        <input 
        onChange={event => setTodo(event.target.value)} 
         className={styles.createTodoInput}
        placeholder="Start typing....." />
        <button className={`btn ${styles.btn}`} onClick={() => setTodos([...todos, todo])}>Create</button>
       </section>
    );
}

export default CreateToDo;