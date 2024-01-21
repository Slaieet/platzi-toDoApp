import { Task } from "../components/Task"
import { useState } from "react"

const ToDos = () => {

    const tareas = [
        {
            id: 1,
            text: "Wake up",
            completed: false
        },
        {
            id: 2,
            text: "sleep",
            completed: false
        },
        {
            id: 3,
            text: "play songs",
            completed: true
        }
    ]

    return(
        <section className="principal-container">
            {tareas.map(tarea => {
                const [complet, setComplet] = useState(tarea.completed);
                return (
                    <Task text={tarea.text} complet={complet} setComplet={setComplet} key={tarea.id} />
                )
            })}
        </section>
    )
}

export {ToDos};