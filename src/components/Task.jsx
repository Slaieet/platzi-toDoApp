const Task = ({ text, complet, setComplet }) => {

    const changeCheck = () => {
        setComplet(!complet)
    }

    return (
        <div className="container-tasks">
            <label className="container-task_label">
                <input type="checkbox"  checked={complet} onChange={changeCheck}/>
                <p
                className={complet ? "task-completed_p" : ""}
                >
                    { text }
                </p>
            </label>
        </div>
    )
}

export {Task};