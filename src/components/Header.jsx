
function Header({page, heading}){
    return(
      <header>
        <h1 id={page==="stocks"?"stock-title":"quote-title"}>{heading}</h1>    
      </header>
    )
}

export default Header