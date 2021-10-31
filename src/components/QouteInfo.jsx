import QuoteHeader from "./QuoteHeader"
import QuoteData from "./QuoteData"

function QuoteInfo({data}){

    return(
        <div className="container">
            <QuoteHeader />
            {data? 
            
            data.map((element)=>{
                return <QuoteData key={element.price} object={element} />
            })
                
            : <h1>Loading...</h1> }
        </div>
    )
}

export default QuoteInfo

