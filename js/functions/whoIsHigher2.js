function higher2(date1, date2){
    let data1 = new Date(date1)
    let data2 = new Date(date2)
    if(data1.getTime() == data2.getTime()){
        return "datas iguais"
    }
    if(data1.getTime() > data2.getTime()){
        return "data 1 maior"
    }
    if(data1.getTime() < data2.getTime()){
        return "data 2 maior"
    }

}

console.log(higher2(`2020-11-30 12:30`, `2020-11-30 12:30`))