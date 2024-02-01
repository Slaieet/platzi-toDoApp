import { Task } from "../components/Task";

const ToDos = ({ tareasFinal, toDos }) => {

    const toDosComplet = tareasFinal.reduce((sum, tarea) => {
        if (tarea.completed) sum += 1;
        return sum;
    }, 0)

    const totalToDos = tareasFinal.length;
    
    return(
        <section className="principal-container">
            <h3>Haz completado { toDosComplet } de { totalToDos } ToDos</h3>

            <input type="text" className="input-new-task"
                placeholder="Agregue una nueva tarea: "
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