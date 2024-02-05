import { ProfilePicture } from "../components/ProfilePicture"
import { Search } from "../components/Search"

const Headerr = ({ busqueda, setBusqueda }) => {

  const url = "https://avatars.githubusercontent.com/u/1561955?v=4";


  return (
    <header className="principal-header">
        <header className="esconder">
            <h1>To Do</h1>
        </header>
      
        <Search type="text" busqueda={busqueda} setBusqueda={setBusqueda} />
      
        <footer className="esconder">
            <ProfilePicture url={url} />
        </footer>
    </header>
  )
}

export { Headerr };