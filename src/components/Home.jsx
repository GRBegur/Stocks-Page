import React from 'react'
import Header from './Header';
import Main from './Main';

function Home(){
    return(
        <React.Fragment>

            <Header subHeading="Information on" heading="Stocks" />
            <Main />

        </React.Fragment>
    )
}

export default Home