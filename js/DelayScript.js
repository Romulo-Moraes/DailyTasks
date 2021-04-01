let delayedSchool = JSON.parse(window.localStorage.getItem("DelayedSchoolTasks"))
let taskList = document.getElementById("TaskList")
var CurrentID = 0
if(delayedSchool != null){
    let i = 0
    let schoolLen = delayedSchool.DelayedSchoolTasks.length

    while(i < schoolLen){
        let taskBody = document.createElement("div")
        taskBody.classList.add("Task")
        taskBody.classList.add("School")
        let ID = document.createElement("h2")
        ID.innerHTML = "ID: " + delayedSchool.DelayedSchoolTasks[i][0]
        let type = document.createElement("h2")
        type.innerHTML = "Tipo: School"
        let title = document.createElement("h2")
        title.innerHTML = `Titulo: ${delayedSchool.DelayedSchoolTasks[i][1]}`
        title.setAttribute("type","School")
        title.classList.add("identificador")
        title.setAttribute("id", delayedSchool.DelayedSchoolTasks[i][0])
        CurrentID++
        let descrição = document.createElement("h2")
        descrição.innerHTML = `Descrição: ${delayedSchool.DelayedSchoolTasks[i][2]}`
        let init = document.createElement("h2")
        init.innerHTML = `Inicio da atribuição: ${delayedSchool.DelayedSchoolTasks[i][3]}`
        let end = document.createElement("h2")
        end.innerHTML = `Data encerramento: ${delayedSchool.DelayedSchoolTasks[i][4]}`
        taskBody.addEventListener("click", function(){
             
            if(lastSelectedTask != null && lastSelectedTask != undefined){
                lastSelectedTask = selectedTask
                lastSelectedType = selectedType
                let allTasks = document.getElementsByClassName("Task")
                let lenOfAllTasks = allTasks.length
                let i = 0
                while(i < lenOfAllTasks){
                    let target = allTasks[i].getElementsByClassName("identificador")[0]
                    if(target.getAttribute("type") == lastSelectedType){
                        if(target.getAttribute("id") == lastSelectedTask){
                            allTasks[i].style.border = "2px solid black"
                        }
                    }
                    i++
                }
                

                
            }
            if(lastSelectedTask == null){
                lastSelectedTask =  this.getElementsByClassName("identificador")[0].getAttribute("id")
                lastSelectedType = this.getElementsByClassName("identificador")[0].getAttribute("type")
            }
           
            selectedTask = this.getElementsByClassName("identificador")[0].getAttribute("id")
            selectedType = this.getElementsByClassName("identificador")[0].getAttribute("type")
            this.style.border = "2px solid red"

        })
        taskBody.appendChild(ID)
        taskBody.appendChild(type)
        taskBody.appendChild(title)
        taskBody.appendChild(descrição)
        taskBody.appendChild(init)
        taskBody.appendChild(end)
        taskList.appendChild(taskBody)
        i++
    }
}

let delayedPersonal = JSON.parse(window.localStorage.getItem("DelayedPersonalTask"))
if(delayedPersonal != null){
    let i = 0
    let PersonalLen = delayedPersonal.DelayedPersonalTask.length
    while(i < PersonalLen){
        let taskBody = document.createElement("div")
        taskBody.classList.add("Task")
        taskBody.classList.add("Personal")
        let ID = document.createElement("h2")
        ID.innerHTML = "ID: " + delayedPersonal.DelayedPersonalTask[i][0]
        let type = document.createElement("h2")
        type.innerHTML = "Tipo: Personal"
        let title = document.createElement("h2")
        title.innerHTML = `Titulo: ${delayedPersonal.DelayedPersonalTask[i][1]}`
        title.setAttribute("type","Personal")
        title.classList.add("identificador")
        title.setAttribute("id", delayedPersonal.DelayedPersonalTask[i][0])
        let descrição = document.createElement("h2")
        descrição.innerHTML = `Descrição: ${delayedPersonal.DelayedPersonalTask[i][2]}`
        let init = document.createElement("h2")
        init.innerHTML = `Inicio da atribuição: ${delayedPersonal.DelayedPersonalTask[i][3]}`
        let end = document.createElement("h2")
        end.innerHTML = `Data encerramento: ${delayedPersonal.DelayedPersonalTask[i][4]}`
        taskBody.addEventListener("click", function(){
            if(lastSelectedTask != null && lastSelectedTask != undefined){
                lastSelectedTask = selectedTask
                lastSelectedType = selectedType
                let allTasks = document.getElementsByClassName("Task")
                let lenOfAllTasks = allTasks.length
                let i = 0
                while(i < lenOfAllTasks){
                    let target = allTasks[i].getElementsByClassName("identificador")[0]

                    if(target.getAttribute("type") == lastSelectedType){
                        if(target.getAttribute("id") == lastSelectedTask){
                            allTasks[i].style.border = "2px solid black"
                        }
                    }
                    i++
                }
                

                
            }
            if(lastSelectedTask == null){
                lastSelectedTask =  this.getElementsByClassName("identificador")[0].getAttribute("id")
                lastSelectedType = this.getElementsByClassName("identificador")[0].getAttribute("type")
            }
           
            selectedTask = this.getElementsByClassName("identificador")[0].getAttribute("id")
            selectedType = this.getElementsByClassName("identificador")[0].getAttribute("type")
            this.style.border = "2px solid red"
        })
        taskBody.appendChild(ID)
        taskBody.appendChild(type)
        taskBody.appendChild(title)
        taskBody.appendChild(descrição)
        taskBody.appendChild(init)
        taskBody.appendChild(end)
        taskList.appendChild(taskBody)
        i++
    }
}   
//window.localStorage.setItem("DelayedDailyTask",null)
//window.localStorage.setItem("DailyTasks",null)

let DelayedDaily = JSON.parse(window.localStorage.getItem("DelayedDailyTask"))
if(DelayedDaily != null){
    let lenOfDelayedDailyTask = DelayedDaily.DelayedDailyTask.length
    let i = 0
    while(i < lenOfDelayedDailyTask){
        let taskBody = document.createElement("div")
        taskBody.classList.add("Task")
        taskBody.classList.add("Daily")
        let type = document.createElement("h2")
        type.innerHTML = "Tipo: Daily"
        let task = document.createElement("h2")
        task.innerHTML = `Task: ${DelayedDaily.DelayedDailyTask[i][1]}`
        task.setAttribute("type","Daily")
        task.classList.add("identificador")
        task.setAttribute("id", CurrentID.toString())
        CurrentID++
        taskBody.addEventListener("click", function(){
            
            if(lastSelectedTask != null && lastSelectedTask != undefined){
                lastSelectedTask = selectedTask
                lastSelectedType = selectedType
                let allTasks = document.getElementsByClassName("Task")
                let lenOfAllTasks = allTasks.length
                let i = 0
                while(i < lenOfAllTasks){
                    let target = allTasks[i].getElementsByClassName("identificador")[0]

                    if(target.getAttribute("type") == lastSelectedType){
                        if(target.getAttribute("id") == lastSelectedTask){
                            allTasks[i].style.border = "2px solid black"
                        }
                    }
                    i++
                }
                

                
            }
            if(lastSelectedTask == null){
                lastSelectedTask =  this.getElementsByClassName("identificador")[0].getAttribute("id")
                lastSelectedType = this.getElementsByClassName("identificador")[0].getAttribute("type")
            }
           
            selectedTask = this.getElementsByClassName("identificador")[0].getAttribute("id")
            selectedType = this.getElementsByClassName("identificador")[0].getAttribute("type")
            this.style.border = "2px solid red"
        })
        taskBody.appendChild(type)
        taskBody.appendChild(task)
        taskList.appendChild(taskBody)
        i++
    }
}

function removeAndFinishDelayedTask(Completed){
    if(selectedType == "School"){
        let SchoolElements = taskList.getElementsByClassName("School")
        let lenOfSchoolElements = SchoolElements.length
        let i = 0
        while(i < lenOfSchoolElements){
            if(SchoolElements[i].getElementsByClassName("identificador")[0].getAttribute("id") == selectedTask){
                SchoolElements[i].remove()
                let schoolTasks = JSON.parse(window.localStorage.getItem("DelayedSchoolTasks"))
                let lenOfTasks = schoolTasks.DelayedSchoolTasks.length
                let r = 0
                while(r < lenOfTasks){
                    if(schoolTasks.DelayedSchoolTasks[i][0] == selectedTask){
                        schoolTasks.DelayedSchoolTasks.splice(r, 1)
                        window.localStorage.setItem("DelayedSchoolTasks", JSON.stringify(schoolTasks))
                        if(Completed == true){
                            let estatisticas = JSON.parse(window.localStorage.getItem("Statistics"))
                            estatisticas.DelayedCompleted += 1
                            window.localStorage.setItem("Statistics", JSON.stringify(estatisticas))
                        }
                        if(Completed == false){
                            let estatisticas = JSON.parse(window.localStorage.getItem("Statistics"))
                            estatisticas.ExcludedTasks += 1
                            window.localStorage.setItem("Statistics", JSON.stringify(estatisticas))
                        }
                        break
                       
                    }
                    r++
                }
                
            }
            i++
        }
    }

    if(selectedType == "Personal"){
        let PersonalElements = taskList.getElementsByClassName("Personal")
        let lenOfPersonalElements = PersonalElements.length
        let i = 0
        while(i < lenOfPersonalElements){
            if(PersonalElements[i].getElementsByClassName("identificador")[0].getAttribute("id") == selectedTask){
                PersonalElements[i].remove()
                let PersonalTasks = JSON.parse(window.localStorage.getItem("DelayedPersonalTask"))
                let lenOfTasks = PersonalTasks.DelayedPersonalTask.length
                let r = 0
                while(r < lenOfTasks){
                    if(PersonalTasks.DelayedPersonalTask[i][0] == selectedTask){
                        PersonalTasks.DelayedPersonalTask.splice(r, 1)
                        window.localStorage.setItem("DelayedPersonalTask", JSON.stringify(PersonalTasks))
                        if(Completed == true){
                            let estatisticas = JSON.parse(window.localStorage.getItem("Statistics"))
                            estatisticas.DelayedCompleted += 1
                            window.localStorage.setItem("Statistics", JSON.stringify(estatisticas))
                        }
                        if(Completed == false){
                            let estatisticas = JSON.parse(window.localStorage.getItem("Statistics"))
                            estatisticas.ExcludedTasks += 1
                            window.localStorage.setItem("Statistics", JSON.stringify(estatisticas))
                        }
                        break
                    }
                    r++
                }
               
            }
            i++
        }
    }


    if(selectedType == "Daily"){
        let DailyElements = taskList.getElementsByClassName("Daily")
        let lenOfDailyElements = DailyElements.length
        let i = 0
        while(i < lenOfDailyElements){
            if(DailyElements[i].getElementsByClassName("identificador")[0].getAttribute("id") == selectedTask){
                DailyElements[i].remove()
                let DailyTasks = JSON.parse(window.localStorage.getItem("DelayedDailyTask"))
                let lenOfTasks = DailyTasks.DelayedDailyTask.length
                let r = 0
                while(r < lenOfTasks){
                    if(Dailyasks.DelayedDailyTask[i][0] == selectedTask){
                        DailyTasks.DelayedDailyTask.splice(r, 1)
                        window.localStorage.setItem("DelayedDailyTask", JSON.stringify(DailyTasks))
                        if(Completed == true){
                            let estatisticas = JSON.parse(window.localStorage.getItem("Statistics"))
                            estatisticas.DelayedCompleted += 1
                            window.localStorage.setItem("Statistics", JSON.stringify(estatisticas))
                        }
                        if(Completed == false){
                            let estatisticas = JSON.parse(window.localStorage.getItem("Statistics"))
                            estatisticas.ExcludedTasks += 1
                            window.localStorage.setItem("Statistics", JSON.stringify(estatisticas))
                        }
                        break
                    }
                    r++
                }

            }
            i++
        }
    }
}
    


