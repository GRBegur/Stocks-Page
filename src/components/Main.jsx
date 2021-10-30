import { useEffect, useState } from 'react';
import fetchData from '../api_data/fetchData';


function Main(){

    const [data, setData] = useState([])
    const [heading, setHeading] = useState([])

    useEffect(()=>{
        fetchData("https://prototype.sbulltech.com/api/v2/instruments","isCsv")
        .then(([heading, jsonData])=>{
            setData(jsonData)
            setHeading(heading)
        })
    },[])

    return (
        <main>
            
        </main>
    )
}

export default Main