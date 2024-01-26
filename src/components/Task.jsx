const Task = ({ text }) => {

    return (
        <div className="container-tasks">
            <label className="container-task_label">
                <input type="checkbox" />
                <p
                // className={complet ? "task-completed_p" : ""}
                >
                    { text }
                </p>
            </label>
        </div>
    )
}

export {Task};