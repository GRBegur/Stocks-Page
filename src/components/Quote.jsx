import React from 'react'
import Header from './Header'
import QuoteInfo from './QouteInfo'

function Quote({match}){
    return(
        <React.Fragment>
            <Header subHeading="Quotets for" heading={match.params.symbol}/>
            <QuoteInfo />
        </React.Fragment>
    )
}

export default Quote