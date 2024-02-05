import { useState, useContext } from "react";
import { Task } from "../components/Task";
import { ModalEdit } from "../components/ModalEdit";
import { modalContext } from "../context/modalContext"

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

    const [ showModal, setShowModal ] = useContext(modalContext);
    const [ valueModal, setValueModal ] = useState({});

    const intervalModal = (id, text) => {
        if (showModal) {
            toDos.edit(valueModal.id, valueModal.text);
            setShowModal(false);
        } else {
            setShowModal(true);
            let modal = {
                text: text,
                id: id
            }
            setValueModal(modal);
        }
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
                    <Task text={tarea.text} key={tarea.id} completed={tarea.completed} id={tarea.id}
                    onComplet={() => toDos.complet(tarea.id)}
                    onDelete={() => toDos.deleted(tarea.id)}
                    intervalModal={intervalModal}
                    />
                )
            })}

            { (showModal) ? <ModalEdit intervalModal={intervalModal} 
                valueModal={valueModal} 
                setValueModal={setValueModal}
            /> : null }

        </section>
    )
}

export {ToDos};