function LookDailyTasks(){
    
let DailyTasks = JSON.parse(window.localStorage.getItem("DailyTasks"))
if(DailyTasks != null){
}
else{
    let data = new Date()
    let day = data.getDate()
    let month = data.getMonth()
    month++
    if(month == 13){
        month = 1
    }
    let year = data.getFullYear()
    let nosj = {
        CurrentID:0,
        lastAccess: [day, month,year],
        DailyTasks: []
        
    }
   
    window.localStorage.setItem("DailyTasks", JSON.stringify(nosj))
}

//let GetLastTime = JSON.parse(window.localStorage.getItem("DailyTasks"))
//GetLastTime.lastAccess[0] = 25
//GetLastTime.lastAccess[1] = 11
//GetLastTime.lastAccess[2] = 2020
//window.localStorage.setItem("DailyTasks", JSON.stringify(GetLastTime))
let opa = 0;
setInterval(function(){
    let newDate = new Date()
    let day = newDate.getDate()
    let month = newDate.getMonth()
    month++
    if(month == 13){
        month = 1
    }
    let year = newDate.getFullYear()
    let GetLastTime = JSON.parse(window.localStorage.getItem("DailyTasks"))
    let lastDay = GetLastTime.lastAccess[0]
    let lastMonth = GetLastTime.lastAccess[1]
    //let lastYear = GetLastTime.lastAccess[2]
    let lastYear = GetLastTime.lastAccess[2]
    let response = whoIsHigher("00:00" , day, month, year, "00:00", lastDay, lastMonth, lastYear)
    if(response == "data 1 maior"){
        
        let theList = document.getElementById("TaskList")
        //let DailyTasks = JSON.parse(window.localStorage.getItem("DailyTasks"))
        let ProgrammedTasks = JSON.parse(window.localStorage.getItem("ProgrammedTasks"))
        let lenOfProgrammedTasks = ProgrammedTasks.ProgrammedTasks.length
        let i = 0
        let DailyInfo = JSON.parse(window.localStorage.getItem("Statistics"))
        //
        //
        //
        //
        //
        //
        //
        let DelayedTasksLen = GetLastTime.DailyTasks.length;
        let r = 0;
        let DelayedDailyTasksValue = DailyInfo.DelayedDaily;
        if(DelayedDailyTasksValue == undefined){
            DelayedDailyTasksValue = 0;
        }
        else{
            DelayedDailyTasksValue = Number(DelayedDailyTasksValue);
        }
        var DailyTasksList = document.getElementById("TaskList");
        if(DailyTasksList != undefined){
            let AllTasksOnMyList = DailyTasksList.getElementsByClassName("Task");
            let LenOfTasksArray = AllTasksOnMyList.length - 1;
            let ç = 0;
            while(LenOfTasksArray >= 0){
                AllTasksOnMyList[LenOfTasksArray].remove();
                LenOfTasksArray--;
            }
        }
        while(r < DelayedTasksLen){
            GetLastTime.DailyTasks.pop();
            DelayedDailyTasksValue += 1;
            r++;
        }
        DailyInfo.DelayedDaily = DelayedDailyTasksValue.toString();
        while(i < lenOfProgrammedTasks){
            GetLastTime.DailyTasks.push(ProgrammedTasks.ProgrammedTasks[i])
            DailyInfo.DailyTotal += 1
            DailyInfo.TasksAttributed += 1
            i++
        }
        window.localStorage.setItem("Statistics" , JSON.stringify(DailyInfo))
        //window.localStorage.setItem("DailyTasks", JSON.stringify(DailyTasks))
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
            if(receivePath == "Daily"){
                ProgrammedTaskBody.appendChild(TaskTitle)
                theList.appendChild(ProgrammedTaskBody)
            }
            
            i++
        }
        GetLastTime.lastAccess[0] = day
        GetLastTime.lastAccess[1] = month
        GetLastTime.lastAccess[2] = year
        window.localStorage.setItem("DailyTasks" , JSON.stringify(GetLastTime))
    }
}, 1000)


}