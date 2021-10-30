
function TableBody({bodyData}){
    return(
        <>
        {Object.keys(bodyData).map((element)=>{
            if(element!=="Validtill")
            return <p>{bodyData[element]}</p>
            else
            return null
        })}
        </>
    )
}

export default TableBody