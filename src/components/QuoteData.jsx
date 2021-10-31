function QuoteData({object}){
    return(
        <div className="table">
        {Object.values(object).map((element)=>{
          return <p key={element}>{element}</p>
        })}
        </div>
    )
}

export default QuoteData