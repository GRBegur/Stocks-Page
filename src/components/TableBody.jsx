
function TableBody({bodyData}){
    return(
        <div className="table">
            {Object.keys(bodyData).map((element)=>{
                if(element!=="Validtill")
                return <p key={element}>{bodyData[element]?bodyData[element]:"No Data Available"}</p>
                else
                return null
            })}
        </div>
    )
}

export default TableBody