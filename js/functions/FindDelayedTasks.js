function findDelayed(Type, canAlterTaskList){
    let TrySchool = JSON.parse(window.localStorage.getItem("DelayedSchoolTasks"))
    let TryPersonal = JSON.parse(window.localStorage.getItem("DelayedPersonalTask"))
    let TryDaily = JSON.parse(window.localStorage.getItem("DelayedDailyTask"))
    let Delay = JSON.parse(window.localStorage.getItem("ProgrammedTasks"))
    if(Delay == null){
        let json = {
            ProgrammedTasks:[]
        }
        window.localStorage.setItem("ProgrammedTasks", JSON.stringify(json))
    }
    if(TrySchool == null){
        let json = {
            haveDelayed:false,
            DelayedSchoolTasks:[]
        }
        window.localStorage.setItem("DelayedSchoolTasks", JSON.stringify(json))
    }
    if(TryPersonal == null){
        let json = {
            haveDelayed:false,
            DelayedPersonalTask:[]
        }
        window.localStorage.setItem("DelayedPersonalTask", JSON.stringify(json))
    }
    if(TryDaily == null){
        let json = {
            haveDelayed:false,
            DelayedDailyTask:[]
        }
        window.localStorage.setItem("DelayedDailyTask", JSON.stringify(json))
    }

    let DelayedSchool = JSON.parse(window.localStorage.getItem("DelayedSchoolTasks"))
    let DelaydDaily= JSON.parse(window.localStorage.getItem("DelayedDailyTask"))
    let TrySchool2 = JSON.parse(window.localStorage.getItem("SchoolTasks"))
    let TryPersonal2 = JSON.parse(window.localStorage.getItem("PersonalTasks"))
    let TryDaily2 = JSON.parse(window.localStorage.getItem("DailyTask"))
    if(Type == "School"){
        if(TrySchool2 != null){

        if(TrySchool2.SchoolTasks != null){

        
        let newDate = new Date()
        let hour = newDate.getHours()
        let minutes = newDate.getMinutes()
        let day = newDate.getDate()
        let month = newDate.getMonth()
        month++
        if(month == 13){
            month = 1
        }
        let year = newDate.getFullYear()
        let lenSchool = TrySchool2.SchoolTasks.length
        let i = 0
        let listToDelete = []
        while(i < lenSchool){
            let target = TrySchool2.SchoolTasks[i]
            let end = target[4]
            let DismembedEnd = DismemberDate(end)
            //window.alert((`${hour}:${minutes} ++++ ${day}/${month}/${year} opa ${DismembedEnd[0]}:${DismembedEnd[1]} +++ ${DismembedEnd[2]}/${DismembedEnd[3]}/${DismembedEnd[4]}`))
            let result = higher2(`${year}-${month}-${day} ${hour}:${minutes}`, target[4])
            
            if(result == "data 1 maior" || result == "datas iguais"){
                let toDelayedStatistics = JSON.parse(window.localStorage.getItem("Statistics"))
                toDelayedStatistics.DelayedTotal += 1
                window.localStorage.setItem("Statistics", JSON.stringify(toDelayedStatistics))
                DelayedSchool.DelayedSchoolTasks.push(TrySchool2.SchoolTasks[i])
                DelayedSchool.haveDelayed = true
                
                listToDelete.push(i)
                let showDelayedHub = document.getElementsByClassName("Hubs")[3]
                showDelayedHub.style.backgroundColor = "red"
                DelayedSchool.haveDelayed = true
                if(canAlterTaskList == true){
                    let id = TrySchool2.SchoolTasks[i][0]
                    let listaDeTarefas = document.getElementById("TaskList")
                    let allTasksOfList = listaDeTarefas.getElementsByClassName("Task")
                    let lenOfList = allTasksOfList.length
                    let g = 0
                    while(g < lenOfList){
                        if(allTasksOfList[g].getElementsByClassName("identificador")[0].getAttribute("id") == id){
                            allTasksOfList[g].remove()
                        }
                        g++
                    }
                }
                

            }
            else{

            }
            i++
        }
        i = 0
        let len = listToDelete.length
        while(i < len){
            TrySchool2.SchoolTasks.splice([listToDelete[i]], 1)
            i++
            
        }
        window.localStorage.setItem("DelayedSchoolTasks" , JSON.stringify(DelayedSchool))
        window.localStorage.setItem("SchoolTasks" , JSON.stringify(TrySchool2))

    }
    else{
    }
    }
}


if(Type == "Personal"){
            
            if(TryPersonal2 != null){
            if(TryPersonal2.PersonalTasks != null){
            
                
            let newDate = new Date()
            let hour = newDate.getHours()
            let minutes = newDate.getMinutes()
            let day = newDate.getDate()
            let month = newDate.getMonth()
            month++
            if(month == 13){
                month = 1
            }
            let year = newDate.getFullYear()
            let lenPersonal = TryPersonal2.PersonalTasks.length
            let i = 0
            let listToDelete = []
            let beRed = document.getElementsByClassName("Hubs")[3]
            while(i < lenPersonal){
                let target = TryPersonal2.PersonalTasks[i]
                let end = target[4]
                let DismembedEnd = DismemberDate(end)
                let result = higher2(`${year}-${month}-${day} ${hour}:${minutes}`, end)

                if(result == "data 1 maior" || result == "datas iguais"){
                    let toDelayedStatistics = JSON.parse(window.localStorage.getItem("Statistics"))
                    toDelayedStatistics.DelayedTotal += 1
                    window.localStorage.setItem("Statistics", JSON.stringify(toDelayedStatistics))
                    beRed.style.backgroundColor = "red"
                    let DelayedPersonal = JSON.parse(window.localStorage.getItem("DelayedPersonalTask"))
                    DelayedPersonal.DelayedPersonalTask.push(TryPersonal2.PersonalTasks[i])
                    window.localStorage.setItem("DelayedPersonalTask" , JSON.stringify(DelayedPersonal))
                    listToDelete.push(i)
                    let showDelayedHub = document.getElementsByClassName("Hubs")[3]
                    showDelayedHub.style.backgroundColor = "red"
                    DelayedSchool.haveDelayed = true
                    if(canAlterTaskList == true){
                        let id = TryPersonal2.PersonalTasks[i][0]
                        let listaDeTarefas = document.getElementById("TaskList")
                        let allTasksOfList = listaDeTarefas.getElementsByClassName("Task")
                        let lenOfList = allTasksOfList.length
                        let g = 0
                        while(g < lenOfList){
                            if(allTasksOfList[g].getElementsByClassName("identificador")[0].getAttribute("id") == id){
                                allTasksOfList[g].remove()
                            }
                            g++
                        }
                    }
                    

                }
                else{

                }
                i++
            }
            i = 0
            let len = listToDelete.length
            while(i < len){
                TryPersonal2.PersonalTasks.splice([listToDelete[i]],1)
                i++
                
            }
            window.localStorage.setItem("PersonalTasks" , JSON.stringify(TryPersonal2))

        }
        else{
        }
        }
    }
    if(Type == "Daily"){
        let newDate = new Date()
    let day = newDate.getDate()
    let month = newDate.getMonth()
    month++
    if(month == 13){
        month = 1
    }
    let year =  newDate.getFullYear()
    let GetLastTime = JSON.parse(window.localStorage.getItem("DailyTasks"))
    let lastDay = GetLastTime.lastAccess[0]
    let lastMonth = GetLastTime.lastAccess[1]
    let lastYear = GetLastTime.lastAccess[2]
    //window.alert(`${day}/${month}/${year}:::: ${lastDay}/${lastMonth}/${lastYear}`)
    let response = higher2(`${year}-${month}-${day} 00:00`, `${lastYear}-${lastMonth}-${lastDay} 00:00`)
    GetLastTime.lastAccess[0] = day
    GetLastTime.lastAccess[1] = month
    GetLastTime.lastAccess[2] = year
    window.localStorage.setItem("DailyTasks", JSON.stringify(GetLastTime))
    if(response == "data 1 maior"){
        let AllDailyTasks = JSON.parse(window.localStorage.getItem("DailyTasks"))
        let Delayed = JSON.parse(window.localStorage.getItem("DelayedDailyTask"))
        let lenOfDailyTasks = AllDailyTasks.DailyTasks.length - 1
        let r = 0
        let list = document.getElementById("TaskList")
        let beRed = document.getElementsByClassName("Hubs")[3]
        let StatisticsInfo = JSON.parse(window.localStorage.getItem("Statistics"))
        while(lenOfDailyTasks >= r){
            beRed.style.backgroundColor = "red"
            Delayed.DelayedDailyTask.push(AllDailyTasks.DailyTasks[lenOfDailyTasks])
            StatisticsInfo.DelayedTotal += 1
            let target = AllDailyTasks.DailyTasks[lenOfDailyTasks][0]
            AllDailyTasks.DailyTasks.pop(lenOfDailyTasks)
            lenOfDailyTasks--
        }
        window.localStorage.setItem("Statistics", JSON.stringify(StatisticsInfo))
        window.localStorage.setItem("DelayedDailyTask" , JSON.stringify(Delayed))
        window.localStorage.setItem("DailyTasks" , JSON.stringify(AllDailyTasks))
        if(canAlterTaskList == true){
            let allTasks = list.getElementsByClassName("Task")
            let lenOfTasks = allTasks.length
            let p = 0
            while(p < lenOfTasks){
                allTasks[0].remove()
                p++
            }
        }


        let theList = document.getElementById("TaskList")
        let DailyTasks = JSON.parse(window.localStorage.getItem("DailyTasks"))
        let ProgrammedTasks = JSON.parse(window.localStorage.getItem("ProgrammedTasks"))
        let lenOfProgrammedTasks = ProgrammedTasks.ProgrammedTasks.length
        let i = 0
        while(i < lenOfProgrammedTasks){
            DailyTasks.DailyTasks.push(ProgrammedTasks.ProgrammedTasks[i])
            i++
        }
        window.localStorage.setItem("DailyTasks", JSON.stringify(DailyTasks))
        if(canAlterTaskList == true){
            i = 0
            while(i < lenOfProgrammedTasks){
                let ProgrammedTaskBody = document.createElement("div")
                ProgrammedTaskBody.classList.add("Task")
                let TaskTitle = document.createElement("h2")
                TaskTitle.textContent = `Task: ${ProgrammedTasks.ProgrammedTasks[i][1]}`
                TaskTitle.setAttribute("id",ProgrammedTasks.ProgrammedTasks[i][0])
                TaskTitle.setAttribute("class" , "identificador")
                ProgrammedTaskBody.addEventListener("click", function(){
                    if(lastTaskSelected != null){
                        lastTaskSelected.style.border = "2px solid black"
                    }
                    selectedProgrammedTask = this.getElementsByClassName("identificador")[0].getAttribute("id")
                    this.style.border = "2px solid red"
                    lastTaskSelected = this.getElementsByClassName("identificador")[0].getAttribute("id") 
                })
                ProgrammedTaskBody.appendChild(TaskTitle)
                theList.appendChild(ProgrammedTaskBody)
                i++
            }
        }
    }
    }

}

