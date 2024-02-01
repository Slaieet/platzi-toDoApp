// css
import "./css/components.css";
import "./css/principal-components.css";

//componentes
import { Headerr } from "./components_base/Headerr.jsx";
import { ToDos } from "./components_base/ToDos.jsx";

// estados
import { useState } from "react";
import { useToDos } from "./customHooks/hooks.jsx";

const App = () => {

  const defaultTareas = localStorage.getItem("TAREAS_V1");
  let auxDefaultTareas;

  if (!defaultTareas) {
    localStorage.setItem("TAREAS_V1", JSON.stringify([]));
    auxDefaultTareas = [];
  } else {
    let aux = localStorage.getItem("TAREAS_V1");
    auxDefaultTareas = JSON.parse(aux);
  }

  const toDos = useToDos(auxDefaultTareas);

  //other state
  const [busqueda, setBusqueda] = useState("");

  const tareasFinal = toDos.tareas.filter((tarea) => {
    let lowerTarea = tarea.text.toLowerCase();
    return lowerTarea.includes(busqueda.toLowerCase());
  })

  return (
    <>
      <Headerr tareas={tareasFinal} busqueda={busqueda} setBusqueda={setBusqueda}/>
      <ToDos tareasFinal={tareasFinal} toDos={toDos} />
    </>
  )
}

export default App
