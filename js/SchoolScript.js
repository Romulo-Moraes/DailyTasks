let taskList = document.getElementById("TaskList")
let target = document.getElementById("AddTaskForm")
let DadOfTasks = document.getElementById("TaskList")
Load("School" , taskList)
function openNewTaskForm(){
   target.style.display = "inline"
}
function NewTask(){
    let title = document.getElementById("Title").value
    let date = document.getElementById("TimeOut").value
    let description = document.getElementById("Description").value
    let SchoolTasks = JSON.parse(window.localStorage.getItem("SchoolTasks"))
    if(SchoolTasks == undefined || SchoolTasks == null){
       
        let canPass = 0
        if(title != null && title != undefined && title.trim() != ""){
            canPass++;
        }
        if(date != null && date != undefined && date.trim() != ""){
            canPass++;
        }
        if(description != null && description != undefined && description.trim() != ""){
            canPass++;
        }
        if(canPass == 3){
            //window.alert("opa: " + date)
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
            let TaskContainer = []
            let Task = []
            let InitialID = 0
            date = Format(date)
            if(date != "A data passada é mais velha do que a data atual, entrada inválida!" && date != "A data passada é exatamente igual à data atual, entrada inválida!"){
            Task.push(InitialID)
            Task.push(title)
            Task.push(lineBR(description))
            Task.push(today)
            Task.push(date)
            let json = {
                CurrentID: 0,
                SchoolTasks:[Task]
            }
            window.localStorage.setItem("SchoolTasks", JSON.stringify(json))
            createTask(InitialID, title,description,today,date, DadOfTasks , "School")
            window.alert("Task adicionada com sucesso!")
            }
            else{
                window.alert(date)
            }
        }
        else{
            window.alert("Verifique os campos e tente novamente!")
        }
    }
    else{
        let canPass = 0
        if(title != null && title != undefined && title.trim() != ""){
            canPass++;
        }
        if(date != null && date != undefined && date.trim() != ""){
            canPass++;
        }
        if(description != null && description != undefined && description.trim() != ""){
            canPass++;
        }
        if(canPass == 3){
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
            date = Format(date)
            if(date != "A data passada é mais velha do que a data atual, entrada inválida!" && date != "A data passada é exatamente igual à data atual, entrada inválida!"){
                
                Task.push(SchoolTasks.CurrentID + 1)
                Task.push(title)
                Task.push(description)
                Task.push(today)
                Task.push(date)

                SchoolTasks.SchoolTasks.push(Task)

                createTask(SchoolTasks.CurrentID + 1, title,description,today,date, DadOfTasks, "School")
                window.alert("Task adicionada com sucesso!")
                SchoolTasks.CurrentID += 1
                SchoolTasks = JSON.stringify(SchoolTasks)
                window.localStorage.setItem("SchoolTasks", SchoolTasks)
            }
            else{
                window.alert(date)
            }
        }
    }
}

function exitTasks(){
    
    target.style.display = "none"
}

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