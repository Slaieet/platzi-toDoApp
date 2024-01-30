import "./css/components.css";
import "./css/principal-components.css";
import { Headerr } from "./components_base/Headerr.jsx";
import { ToDos } from "./components_base/ToDos.jsx";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const App = () => {

  const defaultTareas = [
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

  const [tareas, setTareas] = useState(defaultTareas);
  const [busqueda, setBusqueda] = useState("");

  const tareasFinal = tareas.filter((tarea) => {
    let lowerTarea = tarea.text.toLowerCase();
    return lowerTarea.includes(busqueda.toLowerCase());
  })

  // const addTask = (task) => {
  //   let newTaskAux = {
  //       id : uuid(),
  //       text: task,
  //       completed: false
  //   }

  //   let newTodo = tareas;
  //   newTodo.push(newTaskAux);
  //   setTareas(newTodo);
  // }

  return (
    <>
      <Headerr tareas={tareasFinal} busqueda={busqueda} setBusqueda={setBusqueda}/>
      <ToDos tareasFinal={tareasFinal} tareas={tareas} setTareas={setTareas} addTask={addTask} />
    </>
  )
}

export default App
