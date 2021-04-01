function DismemberDate(date){
    let splitTimeAndDate = date.split(" ")
    let splitTime = splitTimeAndDate[0].split(":")
    let splitDate = splitTimeAndDate[1].split("/")
    let finalResult = []
    finalResult.push(splitTime[0])
    finalResult.push(splitTime[1])
    finalResult.push(splitDate[0])
    finalResult.push(splitDate[1])
    finalResult.push(splitDate[2])
    return finalResult
}
