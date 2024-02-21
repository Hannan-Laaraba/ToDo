 import {useState} from "react";
import {useLocalStorage} from "usehooks-ts"
import styles from "./index.module.css";

function CreateToDo() {
     const [todos, setTodos] = useLocalStorage("TODO_KEY",[]);

    const [todo, setTodo] = useState("");

    const saveTodos = () => {
        //save all todos
        setTodos([...todos, todo]);
        //wipe the input box
        setTodo("");
    }

        localStorage.setItem("TODO_KEY", JSON.stringify(todos))
      

    return (
       <section className={styles.createTodoSection}> 
        <input 
        value={todo}
       //onKeyPress={event => event.charCode == 13 && setTodos([...todos, todo])}
        onKeyDown={event => event.key == "Enter" && saveTodos()}
        onChange={event => setTodo(event.target.value)} 
         className={styles.createTodoInput}
        placeholder="Start typing....." />
        <button className={`btn ${styles.btn}`} 
        onClick={() => setTodos([...todos, todo])}>Create</button>
       </section>
    );
}

export default CreateToDo;