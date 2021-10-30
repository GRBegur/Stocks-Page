function SearchBar({input, handleChange}){
    return(
        <div>
            <input type="search" onChange={handleChange} value={input} />
        </div>
    )
}

export default SearchBar