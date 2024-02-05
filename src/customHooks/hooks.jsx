import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

const useToDos = () => {

    const [ tareas, setTareas ] = useState([]);
    const [ load, setLoad ] = useState(true);


    useEffect(() => {
        try {
            setTimeout(() => {
                const auxdefaultTareas = localStorage.getItem("TAREAS_V1");

                if (!auxdefaultTareas) {
                    localStorage.setItem("TAREAS_V1", JSON.stringify([]));
                } else {
                    let aux = localStorage.getItem("TAREAS_V1");
                    let tareasDefault = JSON.parse(aux);
                    setTareas(tareasDefault);
                }
                
                setLoad(false);
            }, 1000)
        } catch(e) {
            console.log(e);
        }
    }, [])

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

    const createToDo = (text) => {
        let newTodo = [...tareas];
        let aux = {
            id: uuid(),
            text: text,
            completed: false
        }
        newTodo.push(aux);
        saveTodos(newTodo);
    }

    const edit = (id, newValue) => {
        let newTodo = [...tareas];
        let aux = newTodo.findIndex(item => item.id === id);
        newTodo[aux].text = newValue;
        saveTodos(newTodo);
    }

    return {
        tareas,
        complet,
        deleted,
        createToDo,
        edit,
        load
    }
}

export { useToDos };