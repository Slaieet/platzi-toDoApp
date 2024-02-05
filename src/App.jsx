// css
import "./css/components.css";
import "./css/principal-components.css";

//componentes
import { Headerr } from "./components_base/Headerr.jsx";
import { ToDos } from "./components_base/ToDos.jsx";
import { Loading } from "./components/Loading.jsx"

// estados
import { useState } from "react";
import { useToDos } from "./customHooks/hooks.jsx";

//context
import { modalContext } from "./context/modalContext.jsx"

const App = () => {

  const toDos = useToDos();

  //other state
  const [busqueda, setBusqueda] = useState("");

  const tareasFinal = toDos.tareas.filter((tarea) => {
    let lowerTarea = tarea.text.toLowerCase();
    return lowerTarea.includes(busqueda.toLowerCase());
  })

  // modalContext
  const modal = useState(false);

  return (
    <modalContext.Provider value={modal}>
      <main className={(modal[0]) ? "blur" : null }>
          <Headerr tareas={tareasFinal} busqueda={busqueda} setBusqueda={setBusqueda}/>
          { (toDos.load) 
          ? <Loading /> 
          : <ToDos tareasFinal={tareasFinal} toDos={toDos} />
          }
      </main>
    </modalContext.Provider>
  )
}

export default App
