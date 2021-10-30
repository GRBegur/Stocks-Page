import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';


function Table({loading, heading, data}){
    return(
        <React.Fragment>
        {loading ? <h1>Loading...</h1> :

            <React.Fragment>

                <TableHeader headingData={heading} />

                {data.map((element)=>{
                    return <TableBody key={element.item.Symbol} bodyData={element.item}/>
                })}

            </React.Fragment>
        }
        </React.Fragment>
    )
}

export default Table