function SearchBar({input, handleChange}){
    return(
        <div id="search-bar">
            <div id="input-space">
                <input type="search" onChange={handleChange} value={input} placeholder="Search......" />
            </div>
        </div>
    )
}

export default SearchBar