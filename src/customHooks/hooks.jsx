import { useState } from "react";

const useToDos = (tareasDefault) => {
    const [ tareas, setTareas ] = useState(tareasDefault);

    const saveTodos = (newSaveTodos) => {
        localStorage.setItem("TAREAS_V1", JSON.stringify(newSaveTodos));
        setTareas(newSaveTodos);
    }

    const complet = (id) => {
        let newTodo = [...tareas];
        let aux = newTodo.findIndex(item => item.id === id);
        (newTodo[aux].completed === true) ? newTodo[aux].completed = false : newTodo[aux].completed = true;
        saveTodos(newTodo);
    }

    const deleted = (id) => {
        let newTodo = [...tareas];
        let aux = newTodo.findIndex(item => item.id === id);
        newTodo.splice(aux,1);
        saveTodos(newTodo);
    }

    return {
        tareas,
        complet,
        deleted
    }
}

export { useToDos };