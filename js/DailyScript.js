let taskList = document.getElementById("TaskList")
let DadOfTasks = document.getElementById("TaskList")
let targetList = document.getElementsByClassName("Item2")[0]
//window.alert(JSON.stringify(window.localStorage.getItem("DailyTasks")))
Load("Daily" , taskList)
function openNewTaskForm(){
    let target = document.getElementById("AddTaskForm")
   target.style.display = "inline"
}
function NewTask(){
    let theTitle = document.getElementById("Title").value
    let DailyTasks = JSON.parse(window.localStorage.getItem("DailyTasks"))
    if(DailyTasks == undefined || DailyTasks == null){
       
    }
    else{
        let canPass = 0
        if(theTitle != null && theTitle != undefined && theTitle.trim() != ""){
            canPass++;
        }
        if(canPass == 1){
            let MyDate = new Date()
            let hour = MyDate.getHours()
            let minutes = MyDate.getMinutes()
            let day = MyDate.getDate()
            let month = MyDate.getUTCMonth()
            let year = MyDate.getFullYear()
            let taskContainer = []
            let task = []
            month++
            if(month == 13){
                month = 1
            }
            let today = `${hour}:${minutes} ${day}/${month}/${year}`
            let Task = []     
                Task.push(DailyTasks.CurrentID)
                Task.push(theTitle)
                Task.push(today)
                Task.push(`${23}:${59} ${day}/${month}/${year}`)
                DailyTasks.DailyTasks.push(Task)    
                //window.alert(JSON.stringify(DailyTasks))
                createTask(DailyTasks.CurrentID, theTitle,".",today,`${23}:${59} ${day}/${month}/${year}`, DadOfTasks, "Daily")
                window.alert("Task adicionada com sucesso!")    
                let DailyStatistics = JSON.parse(window.localStorage.getItem("Statistics"))
                DailyStatistics.DailyTotal += 1
                DailyStatistics.TasksAttributed += 1
                window.localStorage.setItem("Statistics", JSON.stringify(DailyStatistics))
                DailyTasks.CurrentID += 1
                DailyTasks = JSON.stringify(DailyTasks)
                window.localStorage.setItem("DailyTasks", DailyTasks)

        }
    }
}


function exitTasks(){
    let target = document.getElementById("AddTaskForm")
    target.style.display = "none"
}

function createProgrammedTask(){
    let ProgrammedList = document.getElementById("")
    let taskName = document.getElementById("taskName").value
   
    if(taskName != null){
        if(taskName != null && taskName != undefined && taskName.trim() != " " && taskName.trim() != ""){
            let TaskContainer = JSON.parse(window.localStorage.getItem("ProgrammedTasks"))
            
            if(TaskContainer == null || TaskContainer == undefined){
                let correctID = JSON.parse(window.localStorage.getItem("DailyTasks"))
                //window.alert(JSON.stringify(correctID))
                let newID = correctID.CurrentID
                correctID.CurrentID += 1
                window.localStorage.setItem("DailyTasks", JSON.stringify(correctID))
                let json = {
                    CurrentID: newID,
                    ProgrammedTasks: [[newID,taskName]]
                }
                json.CurrentID = json.CurrentID + 1
                window.localStorage.setItem("ProgrammedTasks", JSON.stringify(json))
            }
            else{
                if(TaskContainer.ProgrammedTasks == null || TaskContainer.ProgrammedTasks == undefined){
                    TaskContainer.ProgrammedTasks = []
                    //window.alert("oksdjfsdfj")
                    let correctID = JSON.parse(window.localStorage.getItem("DailyTasks"))
                    //window.alert(JSON.stringify(correctID))
                    TaskContainer.ProgrammedTasks.push([correctID.CurrentID, taskName])
                    correctID.CurrentID += 1
                    window.localStorage.setItem("DailyTasks", JSON.stringify(correctID))

                    window.localStorage.setItem("ProgrammedTasks" , JSON.stringify(TaskContainer))
                }
                else{
                    let correctID = JSON.parse(window.localStorage.getItem("DailyTasks"))
                    //window.alert(JSON.stringify(correctID))
                    TaskContainer.ProgrammedTasks.push([correctID.CurrentID, taskName])
                    //window.alert(JSON.stringify(TaskContainer))
                    correctID.CurrentID += 1
                    window.localStorage.setItem("DailyTasks", JSON.stringify(correctID))
                    window.localStorage.setItem("ProgrammedTasks" , JSON.stringify(TaskContainer))
                }
            }
            if(targetList != null){
                let newToID = JSON.parse(window.localStorage.getItem("ProgrammedTasks"))
                let programmedTaskBody = document.createElement("div")
                programmedTaskBody.classList.add("ProgrammedTask")
                let Title = document.createElement("h2")
                Title.textContent = `Task: ${taskName}`
                Title.setAttribute("class" , "identificador")
                Title.setAttribute("id", newToID.ProgrammedTasks[newToID.ProgrammedTasks.length - 1][0])
                programmedTaskBody.addEventListener("click", function(){
                    if(lastTaskSelected != null){
                        lastTaskSelected.style.border = "2px solid black"
                    }
                    selectedProgrammedTask = this.getElementsByClassName("identificador")[0].getAttribute("id")
                    this.style.border = "2px solid red"
                    lastTaskSelected = this
                })
                programmedTaskBody.appendChild(Title)
                targetList.appendChild(programmedTaskBody)
            }
            else{
                window.alert("[ERRO] Houve um erro interno! [ERRO]")
            }
        }
        else{
            window.alert("Você precisa digitar um nome para sua Task!")
        }
    }
    else{
        window.alert("Erro intenno!")
    }
}

function LoadFormProgrammedTasks(){
    let TasksContainer = JSON.parse(window.localStorage.getItem("ProgrammedTasks"))
    //window.alert(JSON.stringify(TasksContainer))
    if(TasksContainer != null && TasksContainer != undefined){
        
        if(TasksContainer.ProgrammedTasks != null && TasksContainer.ProgrammedTasks != undefined){
            

            if(targetList != null){
                
                let len = TasksContainer.ProgrammedTasks.length
                let i = 0
                while(i < len){
                    let ProgrammedTaskBody = document.createElement("div")
                    ProgrammedTaskBody.classList.add("ProgrammedTask")
                    let TaskTitle = document.createElement("h2")
                    TaskTitle.textContent = `Task: ${TasksContainer.ProgrammedTasks[i][1]}`
                    TaskTitle.setAttribute("id", TasksContainer.ProgrammedTasks[i][0])
                    TaskTitle.setAttribute("class" , "identificador")
                    ProgrammedTaskBody.addEventListener("click", function(){
                        if(lastTaskSelected != null){
                            lastTaskSelected.style.border = "2px solid black"
                        }
                        selectedProgrammedTask = this.getElementsByClassName("identificador")[0].getAttribute("id")
                        this.style.border = "2px solid red"
                        lastTaskSelected = this

                    })
                    ProgrammedTaskBody.appendChild(TaskTitle)
                    targetList.appendChild(ProgrammedTaskBody)
                    i++
                }   
            }
        }
    }
}

LoadFormProgrammedTasks()

function addNewProgrammedTaskQuestion(){
    let target = document.getElementById("nameAtask")
    if(target != null){
        target.style.display = "inline"
    }
    else{
        window.alert("[ERRO] Houve um erro interno no sistema [ERRO]")
    }
}

function closeProgrammedTaskQuestion(){
    let target = document.getElementById("nameAtask")
    if(target != null){
        target.style.display = "none"
    }
    else{
        window.alert("Erro Interno")
    }
}
function removeProgrammedFormTask(){
    if(selectedProgrammedTask != null){
        let List = document.getElementsByClassName("Item2")[0]
        let elementsOfList = List.getElementsByClassName("ProgrammedTask")
        let len = elementsOfList.length
        let i = 0
        while(i < len){
            let target = elementsOfList[i].getElementsByTagName("h2")[0]
            if(target.getAttribute("id") == selectedProgrammedTask){
                elementsOfList[i].remove()
                let ProgrammedTasksContainer = JSON.parse(window.localStorage.getItem("ProgrammedTasks"))
                let length = ProgrammedTasksContainer.ProgrammedTasks.length
                let r = 0
                while(r < length){
                    if(ProgrammedTasksContainer.ProgrammedTasks[r][0] == selectedProgrammedTask){
                        ProgrammedTasksContainer.ProgrammedTasks.splice(r, 1)
                        window.localStorage.setItem("ProgrammedTasks" , JSON.stringify(ProgrammedTasksContainer))
                        selectedProgrammedTask = null
                        break
                    }
                    r++
                }
                break
            }
            i++
        }
    }
    else{
        window.alert("selecione uma task primeiro!")
    }



}

function backToApplication(){
    let target = document.getElementById("ProgrammedTaskForm")
    if(target != null){
        target.style.display = "none"
    }
    else{
        window.alert("[ERROR] Houve um erro interno [ERRO]")
    }
}

function openProgrammedTaskForm(){
    let target = document.getElementById("ProgrammedTaskForm")
    if(target != null){
        target.style.display = "grid"
    }
    else{
        window.alert("[ERROR] Houve um erro interno [ERRO]")
    }
}

let DailyTasks = JSON.parse(window.localStorage.getItem("DailyTasks"))
if(DailyTasks != null){
    let = DailyTasks.lastAccess
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
/*
setInterval(function(){
    let getLength = JSON.parse(window.localStorage.getItem("DailyTasks"))
    if(getLength != null){
        if(getLength.DailyTasks != null){
            if(getLength.DailyTasks.length > 0){
                findDelayed("Daily")
            }
        }
    }

},1000)
*/
/*
setInterval(function(){
    findDelayed("School" , false)
}, 1000)
setInterval(function(){
    findDelayed("Personal", false)
},1000)
setInterval(function(){
    findDelayed("Daily", true)
}, 1000)
*/
LookDailyTasks()

setInterval(function(){
    let getLength = JSON.parse(window.localStorage.getItem("SchoolTasks"))
    if(getLength != null){
        if(getLength.SchoolTasks != null){
            if(getLength.SchoolTasks.length > 0){
                findDelayed("School", true)
            }
        }
    }

},1000)
setInterval(function(){
    let getLength = JSON.parse(window.localStorage.getItem("PersonalTasks"))

    //window.alert(JSON.stringify(getLength))
    if(getLength != null){
        if(getLength.PersonalTasks != null){
            if(getLength.PersonalTasks.length > 0){
                findDelayed("Personal", false)
            }
        }
    }

},1000)
setInterval(function(){
    let getLength = JSON.parse(window.localStorage.getItem("DailyTasks"))

    //window.alert(JSON.stringify(getLength))
    if(getLength != null){
        if(getLength.PersonalTasks != null){
            if(getLength.DailyTasks.length > 0){
                findDelayed("Daily", false)
            }
        }
    }

},1000)



let VerifyDelayedTasks = JSON.parse(window.localStorage.getItem("DelayedSchoolTasks"))
if(VerifyDelayedTasks.DelayedSchoolTasks.length > 0){
    let beRed = document.getElementsByClassName("Hubs")[3]
    beRed.style.backgroundColor = "red"
}
let VerifyDelayedPersonalTasks = JSON.parse(window.localStorage.getItem("DelayedPersonalTask"))
if(VerifyDelayedPersonalTasks.DelayedPersonalTask.length > 0){
    let beRed = document.getElementsByClassName("Hubs")[3]
    beRed.style.backgroundColor = "red"
}
let VerifyDelayedDailyTasks = JSON.parse(window.localStorage.getItem("DelayedDailyTask"))
if(VerifyDelayedDailyTasks.DelayedDailyTask.length > 0){
    let beRed = document.getElementsByClassName("Hubs")[3]
    beRed.style.backgroundColor = "red"
}
