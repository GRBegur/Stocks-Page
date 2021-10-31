import React from 'react';
import ReactLoading from 'react-loading';
import TableBody from './TableBody';
import TableHeader from './TableHeader';


function Table({loading, heading, data}){
    return(
        <React.Fragment>
        {loading ? <ReactLoading id="loading" type={"spin"} color="#b3c8ff" /> :

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