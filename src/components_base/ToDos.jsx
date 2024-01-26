import { Task } from "../components/Task"

const ToDos = ({ tareas }) => {

    const toDosComplet = tareas.reduce((sum, tarea) => {
        if (tarea.completed) sum += 1;
        return sum;
    }, 0)

    const totalToDos = tareas.length;

    return(
        <section className="principal-container">
            <h3>Haz completado { toDosComplet } de { totalToDos } ToDos</h3>
            {tareas.map(tarea => {
                return (
                    <Task text={tarea.text} key={tarea.id} />
                )
            })}
        </section>
    )
}

export {ToDos};