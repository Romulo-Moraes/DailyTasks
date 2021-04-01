function Format(date){
    let MyDate = new Date()
    let hour = MyDate.getHours()
    let minutes = MyDate.getMinutes()
    let day = MyDate.getDate()
    let month = MyDate.getMonth()
    month++
    if(month == 13){
        month = 1
    }
    let year = MyDate.getFullYear()
    let dateWithouT = date.split("T")
    
    let today = `${year}-${month}-${day} ${hour}:${minutes}`
    let theDate = `${dateWithouT[0]} ${dateWithouT[1]}`
    let newToday = new Date(today)
    let newTheDate = new Date(theDate)
    if(newToday.getTime() == newTheDate.getTime()){
        return "A data passada é exatamente igual à data atual, entrada inválida!"
    }
    if(newToday.getTime() < newTheDate.getTime()){
        return `${dateWithouT[0]} ${dateWithouT[1]}`
    }
    if(newToday.getTime() > newTheDate.getTime()){
        return "A data passada é mais velha do que a data atual, entrada inválida!"
    }
}
