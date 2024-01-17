import { ProfilePicture } from "../components/ProfilePicture"
import { Search } from "../components/Search"

const Headerr = ({name}) => {

    const url = "https://avatars.githubusercontent.com/u/1561955?v=4";

  return (
    <header className="principal-header">
        <header>
            <h1>To Do</h1>
        </header>
      
        <Search type="text"/>
      
        <footer>
            <ProfilePicture url={url} />
        </footer>
    </header>
  )
}

export { Headerr };