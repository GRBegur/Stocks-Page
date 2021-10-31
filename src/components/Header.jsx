
function Header({subHeading, heading}){
    return(
      <header>
        <h1><span id="pre-heading">{subHeading}</span>{heading}</h1>    
      </header>
    )
}

export default Header