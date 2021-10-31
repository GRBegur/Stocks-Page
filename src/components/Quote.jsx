import React, { useEffect, useState } from 'react'
import fetchData from '../api_data/fetchData'
import Header from './Header'
import QuoteInfo from './QouteInfo'



function Quote({match}){

    const symbol = match.params.symbol
    const [data, setData] = useState(null)

    useEffect(()=>{
        fetchData(`https://prototype.sbulltech.com/api/v2/quotes/${symbol}`,"isJson").then(data=>setData(data.payload[symbol]))
    },[symbol])


    return(
        <React.Fragment>
            <Header subHeading="Quotets for" heading={symbol}/>
            <QuoteInfo data={data} />
        </React.Fragment>
    )
}

export default Quote