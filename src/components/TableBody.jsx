import { Link } from "react-router-dom"

function TableBody({bodyData}){
    return(
        <div className="table">
            {Object.keys(bodyData).map((element)=>{
                const value = bodyData[element]?bodyData[element]:"No Data Available"
                if(element==="Symbol")
                return <Link key={element} to={`/quote/${value}`}><p className="symbol">{value}</p></Link>
                if(element!=="Validtill")
                return <p key={element}>{value}</p>
                else
                return null
            })}
        </div>
    )
}

export default TableBody