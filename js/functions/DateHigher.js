function whoIsHigher(hora1, dia1 , mes1 , ano1 ,hora2 ,dia2 ,mes2 ,ano2 ){
    //data 2 é o momento exato que o programa será executado, sendo assim caso o 2 seja maior veremos
    //a data informada pelo usuário já passou!
    let time = hora1.split(":")
    let time2 = hora2.split(":")
    let hour1 = time[0]
    let minute1 = time[1]
    let hour2 = time2[0]
    let minute2 = time2[1]

    if(ano1 > ano2){
        return "data 1 maior"
    }
    if(ano1 == ano2){
        if(mes1 > mes2){
            return "data 1 maior"
        }
        if(mes1 == mes2){
            if(dia1 > dia2){
                return "data 1 maior"
            }
            if(dia1 == dia2){
                if(hour1 > hour2){
                    return "data 1 maior"
                }
                if(hour1 == hour2){
                    if(minute1 > minute2){
                        return "data 1 maior"
                    }
                    if(minute1 == minute2){
                        return "datas iguais"
                    }
                    else{
                        return "data 2 maior"
                    }

                }
                else{
                    return "data 2 maior"
                }
            }
            else{
                return "data 2 maior"
            }
        }
        else{
            return "data 2 maior"
        }
    }
    else{
        return "data 2 maior"
    }
   
}

