

function TableHeader({headingData}){
    return(
        <div className="table">
        {headingData.map(element => {
            if(element!=="Validtill")
            return <p key={element}>{element}</p>
            else
            return null
        })}  
        </div>  
    )
}

export default TableHeader