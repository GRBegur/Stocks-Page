import axios from "axios";
import csvToJson from "./csvToJson";

async function fetchData(url,type){
    
    const response = await axios.get(url);

    if(type==="isCsv"){
        return csvToJson(response);
    }else if(type==="isJson"){
        return response.data
    }
    
}

export default fetchData