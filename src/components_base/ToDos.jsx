import { Task } from "../components/Task";

const ToDos = ({ tareasFinal, tareas, setTareas }) => {

    const toDosComplet = tareasFinal.reduce((sum, tarea) => {
        if (tarea.completed) sum += 1;
        return sum;
    }, 0)

    const totalToDos = tareasFinal.length;

    const todoComplet = (id) => {
        let newTodo = [...tareas];
        let aux = newTodo.findIndex(item => item.id === id);
        (newTodo[aux].completed === true) ? newTodo[aux].completed = false : newTodo[aux].completed = true;
        setTareas(newTodo);
    }

    const onDelete = (id) => {
        let newTodo = [...tareas];
        let aux = newTodo.findIndex(item => item.id === id);
        newTodo.splice(aux,1)
        setTareas(newTodo);
    }
    
    return(
        <section className="principal-container">
            <h3>Haz completado { toDosComplet } de { totalToDos } ToDos</h3>

            <input type="text" className="input-new-task"
                placeholder="Agregue una nueva tarea: "
            />

            {tareasFinal.map(tarea => {
                return (
                    <Task text={tarea.text} key={tarea.id} completed={tarea.completed}
                    onComplet={() => todoComplet(tarea.id)}
                    onDelete={() => onDelete(tarea.id)}
                    />
                )
            })}
        </section>
    )
}

export {ToDos};