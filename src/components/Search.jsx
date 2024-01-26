import iconSearch from "../icons/icon-search.svg"

const Search = ({ type, busqueda, setBusqueda }) => {

    return(
    <section className="principal-search">
        <img src={iconSearch} alt="icon-search" id="search-icon"/>
        <input type={type} value={busqueda} onChange={e => setBusqueda(e.target.value)} />
    </section>
    )
}

export { Search };