import React, { useContext, useEffect} from 'react'
import fetchData from '../api_data/fetchData'
import Context from '../context/Context'
import Header from './Header'
import QuoteInfo from './QouteInfo'



function Quote({match}){

    const symbol = match.params.symbol
    const {clearTime, needToUpdate, sortData, sortHandle:[sortType] } = useContext(Context)

    useEffect(()=>{
        return ()=>clearTime()
    },[])

    useEffect(()=>{
        fetchData(`https://prototype.sbulltech.com/api/v2/quotes/${symbol}`,"isJson")
        .then(data=>{
            sortData(data.payload[symbol],sortType,"forNewData")
        })
    },[needToUpdate])

    return(
        <React.Fragment>
            <Header subHeading="Quotets for" heading={symbol}/>
            <QuoteInfo />
        </React.Fragment>
    )
}

export default Quote