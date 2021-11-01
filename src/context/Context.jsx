import {createContext, useState, useRef} from 'react'

const Context = createContext();

export function Provider(props){

    const [data, setData] = useState(null)
    const [needToUpdate, setUpdate] = useState(null)
    const [typeOfSort, setType] = useState("Asc")
    const interval = useRef()

    const startTimer=(recievedData)=>{
        const maxTime = recievedData.reduce((max,element)=>{
            if(new Date(element["valid_till"])>new Date(max["valid_till"]))
                return element
            return max 
        })

        const expiryTime = new Date(maxTime["valid_till"]).getTime()+1.98e7
        const localTime = new Date().getTime()
        interval.current = setTimeout(()=>{
            setData(null)
            setUpdate(localTime)
        },Math.ceil((expiryTime-localTime<=0?0:expiryTime-localTime)+5000))
    }

    const clearTime=()=>{
        clearTimeout(interval)
        setData(null)
        setType("Asc")
    }

    const sortData=(recievedData,typeOfSort,typeofUpdate)=>{
        let sortedData;
        if(typeOfSort==='Asc'){
            sortedData = sortAscending(recievedData)
        }else if(typeOfSort==="Desc"){
            sortedData = sortDescending(recievedData)
        }

        if(typeofUpdate==='forNewData'){
            setData(sortedData)
            startTimer(sortedData)
        }else if(typeofUpdate==="forClick"){
            
            setData(sortedData)
        }
        
    }

    const sortAscending=(recievedData)=>{
        const newDate =  recievedData.sort((ob1,ob2)=>{
            return new Date(ob1.time)-new Date(ob2.time)
        })
        return newDate
    }

    const sortDescending=(recievedData)=>{
        const newDate = recievedData.sort((ob1,ob2)=>{
            return new Date(ob2.time)-new Date(ob1.time)
        })
        return newDate
    }

    return(
        <Context.Provider value={{  needToUpdate: needToUpdate, 
                                    data: data, 
                                    sortData: sortData, 
                                    sortHandle: [typeOfSort, setType],
                                    clearTime: clearTime
                                }}>
            {props.children}
        </Context.Provider>
    )
}


export default Context