import { useEffect, useState } from 'react';
import fetchData from '../api_data/fetchData';
import TableBody from './TableBody';
import TableHeader from './TableHeader';


function Main(){

    const [data, setData] = useState([])
    const [heading, setHeading] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetchData("https://prototype.sbulltech.com/api/v2/instruments","isCsv")
        .then(([heading, jsonData])=>{
            setData(jsonData)
            setHeading(heading)
            setLoading(false)
        })
    },[])

    return (
        <main>
            <div id="container"> 
                {loading?<h1>Loading...</h1>:
                <>
                <div id="table">
                    <TableHeader headingData={heading} />
                </div>
                {data.map((element)=>{
                        return (<div key={element.Symbol} id="table">
                        <TableBody bodyData={element}/>
                        </div>)
                    })
                }
                </>}
            </div>
        </main>
    )
}

export default Main