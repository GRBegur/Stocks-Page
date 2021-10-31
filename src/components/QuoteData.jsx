function QuoteData({object}){
    return(
        <div className="table">
        {Object.keys(object).map((element)=>{
          if(element!=="price")
          return <p key={element}>{new Date(object[element]).toLocaleString()}</p>
          return <p key={element}>{object[element]}</p>
        })}
        </div>
    )
}

export default QuoteData