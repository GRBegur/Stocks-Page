import down from '../images/down.png'
import up from '../images/up.png'
import { useContext} from 'react'
import Context from '../context/Context'


function QuoteHeader(){

    const {sortHandle:[sortType, setType], sortData, data } = useContext(Context)

    const handleClick=()=>{
        if(sortType==="Asc"){
            sortData(data,"Desc","forClick")
            setType("Desc")
        }else{
            sortData(data,"Asc","forClick")
            setType("Asc")
        }
    }

    return(
        <div className="table" id="table-header">
            <p>Price</p>
            <p>Time {data && <img id="arrow" src={sortType==="Asc"?up:down} alt="up arrow" onClick={handleClick} />}</p>
            <p>Valid_till</p>
        </div>
    )
}

export default QuoteHeader