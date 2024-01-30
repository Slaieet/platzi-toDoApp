import iconTrash from "../icons/delete.svg"
import trashBlue from "../icons/delete-blue.svg"
import { useState } from "react"

const Task = ({ text, completed, onComplet, onDelete }) => {

    const [ trash, setTrash ] = useState(iconTrash);
    
    return (
        <div className="container-tasks">
            <label className="container-task_label">
                <input type="checkbox" checked={completed} onChange={onComplet}/>
                <p
                className={completed ? "task-completed_p" : ""}
                >
                    { text }
                </p>
            </label>
            <img 
            src={trash} alt="trash" className="icon-trash"
            onMouseEnter={() => setTrash(trashBlue)}
            onMouseLeave={() => setTrash(iconTrash)}
            onClick={onDelete}
            />
        </div>
    )
}

export {Task};