import iconSearch from "../icons/icon-search.svg"

const Search = ({type}) => {

    return(
    <section className="principal-search">
        <img src={iconSearch} alt="icon-search" id="search-icon"/>
        <input type={type}/>
    </section>
    )
}

export { Search };