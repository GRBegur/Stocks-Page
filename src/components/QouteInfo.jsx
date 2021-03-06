import ReactLoading from 'react-loading';
import QuoteHeader from "./QuoteHeader";
import QuoteData from "./QuoteData";
import React, { useContext } from "react";
import Context from "../context/Context";

function QuoteInfo(props){

    const {data} = useContext(Context)

    const handleClick=()=>{
        props.history.replace("/")
    }

    return(
        <React.Fragment>
        <button id="back-button" onClick={handleClick}>Back to Stocks</button>
        <div className="container">
            <QuoteHeader />
            {data? 
            data.map((element)=>{
                return <QuoteData key={element.price} object={element} />
            })
            : <ReactLoading id="loading" type={"spin"} color="#b3c8ff" /> }
        </div>
        </React.Fragment>
    )
}

export default QuoteInfo

