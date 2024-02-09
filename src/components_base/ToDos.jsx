import { useState, useContext } from "react";
import { Task } from "../components/Task";
import { ModalEdit } from "../components/ModalEdit";
import { modalContext } from "../context/modalContext";
import sendIcon from "../icons/send.svg";
import sendIconBlue from "../icons/sendBlue.svg";

const ToDos = ({ tareasFinal, toDos }) => {

    const toDosComplet = tareasFinal.reduce((sum, tarea) => {
        if (tarea.completed) sum += 1;
        return sum;
    }, 0)

    const totalToDos = tareasFinal.length;

    const [ valueNewTask, setValueNewTask ] = useState("");

    const newTodo = (click, event) => {
        if (valueNewTask !== undefined && valueNewTask !== "") {
            if (click) {
                toDos.createToDo(valueNewTask);
                setValueNewTask("");
            } else {
                if (event.key === "Enter") {
                    toDos.createToDo(valueNewTask);
                    setValueNewTask("");
                }                
            }
        }
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
    
    const onlyClose = () => {
        setShowModal(false);
    }

    const [ send, setSend ] = useState(sendIcon);

    return(
        <section className="principal-container">
            <h3>Haz completado { toDosComplet } de { totalToDos } ToDos</h3>

        <div className="cage-new-task">
            <input type="text" className="input-new-task"
                placeholder="Agregue una nueva tarea: "
                value={valueNewTask}
                onChange={e => setValueNewTask(e.target.value)}
                onKeyDown={e => newTodo(false, e)}
            />
            <img src={send} alt="send" className="icon-send" 
                onMouseEnter={() => setSend(sendIconBlue)}
                onMouseLeave={() => setSend(sendIcon)}
                onClick={e => newTodo(true)}
            />
        </div>

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
                onlyClose={onlyClose}
            /> : null }

        </section>
    )
}

export {ToDos};