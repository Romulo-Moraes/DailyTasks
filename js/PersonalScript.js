let taskList = document.getElementById("TaskList")
let target = document.getElementById("AddTaskForm")
let DadOfTasks = document.getElementById("TaskList")
Load("Personal" , taskList)
function openNewTaskForm(){
   target.style.display = "inline"
}
function NewTask(){
    let title = document.getElementById("Title").value
    let date = document.getElementById("TimeOut").value
    let description = document.getElementById("Description").value
    let PersonalTasks = JSON.parse(window.localStorage.getItem("PersonalTasks"))
    if(PersonalTasks == undefined || PersonalTasks == null){
       
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
            let TaskContainer = []
            let Task = []
            let InitialID = 0
            date = Format(date)
            if(date != "A data passada é mais velha do que a data atual, entrada inválida!" && date != "A data passada é exatamente igual à data atual, entrada inválida!"){
            Task.push(InitialID)
            Task.push(title)
            Task.push(description)
            Task.push(today)
            Task.push(date)
            let json = {
                CurrentID: 0,
                PersonalTasks:[Task]
            }
            window.localStorage.setItem("PersonalTasks", JSON.stringify(json))
            createTask(InitialID, title,description,today,date, DadOfTasks, "Personal")
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
            window.alert(date)
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
                
                Task.push(PersonalTasks.CurrentID + 1)
                Task.push(title)
                Task.push(description)
                Task.push(today)
                Task.push(date)
                PersonalTasks.PersonalTasks.push(Task)

                createTask(PersonalTasks.CurrentID + 1, title,description,today,date, DadOfTasks)
                let ToPersonalStatistics = JSON.parse(window.localStorage.getItem("Statistics"))
                ToPersonalStatistics.PersonalTotal += 1
                ToPersonalStatistics.TasksAttributed += 1
                window.localStorage.setItem("Statistics" , JSON.stringify(ToPersonalStatistics))
                window.alert("Task adicionada com sucesso!")
                PersonalTasks.CurrentID += 1
                PersonalTasks = JSON.stringify(PersonalTasks)
                window.localStorage.setItem("PersonalTasks", PersonalTasks)
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


//window.localStorage.setItem("DelayedDailyTask", null)
//window.localStorage.setItem("DelayedSchoolTasks", null)
//window.localStorage.setItem("DelayedPersonalTask", null)
//window.localStorage.setItem("DailyTasks", null)
//window.localStorage.setItem("SchoolTasks", null)
//window.localStorage.setItem("PersonalTask", null)




LookDailyTasks()

setInterval(function(){
    let getLength = JSON.parse(window.localStorage.getItem("PersonalTasks"))

    //window.alert(JSON.stringify(getLength))
    if(getLength != null){
        if(getLength.PersonalTasks != null){
            if(getLength.PersonalTasks.length > 0){
                findDelayed("Personal", true)
            }
        }
    }

},1000)

setInterval(function(){
    let getLength = JSON.parse(window.localStorage.getItem("SchoolTasks"))
    //window.alert(JSON.stringify(getLength))
    if(getLength != null){
        if(getLength.SchoolTasks != null){
            if(getLength.SchoolTasks.length > 0){
                findDelayed("School", false)
            }
        }
    }

},1000)




setInterval(function(){
    let getLength = JSON.parse(window.localStorage.getItem("DailyTasks"))
    //window.alert(JSON.stringify(getLength))
    if(getLength != null){
        if(getLength.DailyTasks != null){
            if(getLength.DailyTasks.length > 0){
                findDelayed("Daily", false)
            }
        }
    }

},1000)


findDelayed("justCharge", false)

let VerifyDelayedSchoolTasks = JSON.parse(window.localStorage.getItem("DelayedSchoolTasks"))
if(VerifyDelayedSchoolTasks.DelayedSchoolTasks.length > 0){
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


