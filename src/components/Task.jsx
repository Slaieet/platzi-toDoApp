import iconTrash from "../icons/delete.svg";
import trashBlue from "../icons/delete-blue.svg";
import iconEdit from "../icons/edit.svg";
import iconEditBlue from "../icons/edit-blue.svg";
import { useState } from "react";

const Task = ({ text, completed, onComplet, onDelete, intervalModal, id }) => {

    const [ trash, setTrash ] = useState(iconTrash);
    const [ edit, setEdit ] = useState(iconEdit);
    
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
            <img src={edit} alt="edit" className="icon-edit"
            onMouseEnter={() => setEdit(iconEditBlue)}
            onMouseLeave={() => setEdit(iconEdit)}
            onClick={() => intervalModal(id, text)}
            />
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