import { useEffect,  useReducer } from 'react';
import Fuse from 'fuse.js'; 
import fetchData from '../api_data/fetchData';
import SearchBar from './SearchBar';
import Table from './Table';


const initialState = {
    data: [],
    heading: [],
    loading: true,
    input: ""
}

const reducer = (state,action)=>{
    switch(action.type){
        case "recievedData":
            return {...state, data: action.data, heading: action.heading, loading: action.loading}
        case "setInput":
            return {...state, input: action.input}
        default:
            return state
    }
}


function Main(){

    const [state, dispatch] = useReducer(reducer, initialState)
    const fuse = new Fuse(state.data,{
        keys: ["Symbol", "Name"]
    })
    const updatedData = fuse.search(state.input?state.input:" ")

    useEffect(()=>{
        fetchData("https://prototype.sbulltech.com/api/v2/instruments","isCsv")
        .then(([headingData, jsonData])=>{
            dispatch({type:"recievedData", data: jsonData, heading: headingData, loading: false})
        })
    },[])

    const handleChange= (event)=>{
        dispatch({type:"setInput", input: event.target.value})
    }


    return (

        <main>

            <SearchBar input={state.input} handleChange={(event)=>handleChange(event)} />

            <div className="container"> 
                <Table loading={state.loading} heading={state.heading} data={updatedData}/>

            </div>
        </main>
    )
}

export default Main