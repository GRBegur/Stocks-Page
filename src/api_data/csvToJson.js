function csvToJson(res){
    const data = res.data.split("\n")
    const headingArr = data[0].split(",")
    const resultJson = []

    data.forEach((dataString,index) => {
        if(index!==0 && dataString!==""){
            const jsonObject = {}
            const arrayValues = dataString.split(",")
            headingArr.forEach((header,index)=>{
            jsonObject[header] = arrayValues[index]
            })
            resultJson.push(jsonObject)
        }
    });
    return [headingArr,resultJson]
}

export default csvToJson