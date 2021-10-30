

function TableHeader({headingData}){
    return(
        <>
        {headingData.map(element => {
            if(element!=="Validtill")
            return <p key={element}>{element}</p>
            else
            return null
        })}  
        </>  
    )
}

export default TableHeader