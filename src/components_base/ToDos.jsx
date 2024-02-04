import { useState } from "react";
import { Task } from "../components/Task";

const ToDos = ({ tareasFinal, toDos }) => {

    const toDosComplet = tareasFinal.reduce((sum, tarea) => {
        if (tarea.completed) sum += 1;
        return sum;
    }, 0)

    const totalToDos = tareasFinal.length;

    const [ valueNewTask, setValueNewTask ] = useState("");

    const newTodo = event => {
        if (event.key === "Enter") {
            toDos.createToDo(valueNewTask);
            setValueNewTask("");
        };
    }
    
    return(
        <section className="principal-container">
            <h3>Haz completado { toDosComplet } de { totalToDos } ToDos</h3>

            <input type="text" className="input-new-task"
                placeholder="Agregue una nueva tarea: "
                value={valueNewTask}
                onChange={e => setValueNewTask(e.target.value)}
                onKeyDown={newTodo}
            />

            {tareasFinal.map(tarea => {
                return (
                    <Task text={tarea.text} key={tarea.id} completed={tarea.completed}
                    onComplet={() => toDos.complet(tarea.id)}
                    onDelete={() => toDos.deleted(tarea.id)}
                    />
                )
            })}
        </section>
    )
}

export {ToDos};