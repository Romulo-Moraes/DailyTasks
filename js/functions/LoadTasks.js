function Load(Type, TaskList){

    if(Type == "School"){
        var TasksInJsonFormat = JSON.parse(window.localStorage.getItem("SchoolTasks"))
        if(TasksInJsonFormat != null && TasksInJsonFormat!= undefined){ 
            let i = 0
            let lenOfTaskContainer = TasksInJsonFormat.SchoolTasks.length
            while(i < lenOfTaskContainer){
                let taskBody = document.createElement("div")
                taskBody.classList.add("Task")
                let ID = document.createElement("h2")
                ID.textContent = `ID: ${TasksInJsonFormat.SchoolTasks[i][0]}`
                ID.classList.add("identificador")
                ID.id = TasksInJsonFormat.SchoolTasks[i][0]
                ID.setAttribute("init",TasksInJsonFormat.SchoolTasks[i][3])
                ID.setAttribute("end",TasksInJsonFormat.SchoolTasks[i][4] )
                let title = document.createElement("h2")
                title.textContent = `Titulo: ${TasksInJsonFormat.SchoolTasks[i][1]}`
                let description = document.createElement("h2")
                description.innerHTML = `Descrição:<br/>${lineBR(TasksInJsonFormat.SchoolTasks[i][2])}`
                let init = document.createElement("h2")
                init.textContent = `Inicio da atribuição: ${TasksInJsonFormat.SchoolTasks[i][3]}`
                let end = document.createElement("h2")
                end.textContent = `Data de encerramento: ${TasksInJsonFormat.SchoolTasks[i][4]}`
                taskBody.addEventListener("click", function(){
                    let target = this.getElementsByClassName("identificador")[0]
                    selectedTask = target.getAttribute("id")
                    this.style.border = "2px solid red"
                })
                taskBody.appendChild(ID)
                taskBody.appendChild(title)
                taskBody.appendChild(description)
                taskBody.appendChild(init)
                taskBody.appendChild(end)
                TaskList.appendChild(taskBody)
                i++
            }
        }
    }

    if(Type == "Personal"){
        var TasksInJsonFormat = JSON.parse(window.localStorage.getItem("PersonalTasks"))
        if(TasksInJsonFormat != null && TasksInJsonFormat!= undefined){ 
            let i = 0
            let lenOfTaskContainer = TasksInJsonFormat.PersonalTasks.length
            while(i < lenOfTaskContainer){
                let taskBody = document.createElement("div")
                taskBody.classList.add("Task")
                let ID = document.createElement("h2")
                ID.textContent = `ID: ${TasksInJsonFormat.PersonalTasks[i][0]}`
                ID.classList.add("identificador")
                ID.id = TasksInJsonFormat.PersonalTasks[i][0]
                ID.setAttribute("init",TasksInJsonFormat.PersonalTasks[i][3])
                ID.setAttribute("end",TasksInJsonFormat.PersonalTasks[i][4])
                let title = document.createElement("h2")
                title.textContent = `Titulo: ${TasksInJsonFormat.PersonalTasks[i][1]}`
                let description = document.createElement("h2")
                description.innerHTML = `Descrição: ${lineBR(TasksInJsonFormat.PersonalTasks[i][2])}`
                let init = document.createElement("h2")
                init.textContent = `Inicio da atribuição: ${TasksInJsonFormat.PersonalTasks[i][3]}`
                let end = document.createElement("h2")
                end.textContent = `Data de encerramento: ${TasksInJsonFormat.PersonalTasks[i][4]}`
                taskBody.addEventListener("click", function(){
                    let target = this.getElementsByClassName("identificador")[0]
                    selectedTask = target.getAttribute("id")
                    this.style.border = "2px solid red"
                })
                taskBody.appendChild(ID)
                taskBody.appendChild(title)
                taskBody.appendChild(description)
                taskBody.appendChild(init)
                taskBody.appendChild(end)
                TaskList.appendChild(taskBody)
                i++
            }
        }
    }

    if(Type == "Daily"){
        var TasksInJsonFormat = JSON.parse(window.localStorage.getItem("DailyTasks"))
        if(TasksInJsonFormat != null && TasksInJsonFormat != undefined){ 
            let i = 0
            let lenOfTaskContainer = TasksInJsonFormat.DailyTasks.length
            while(i < lenOfTaskContainer){
                let taskBody = document.createElement("div")
                taskBody.classList.add("Task")
                let title = document.createElement("h2")
                title.textContent = `Task: ${TasksInJsonFormat.DailyTasks[i][1]}`
                title.setAttribute("id" , TasksInJsonFormat.DailyTasks[i][0])
                title.setAttribute("class" , "identificador")
                taskBody.addEventListener("click", function(){
                    lastTaskSelected = selectedTask
                    let target = this.getElementsByTagName("h2")[0]
                    selectedTask = target.getAttribute("id")
                    this.style.border = "2px solid red"
                    if(lastTaskSelected == null){
                        lastTaskSelected = target.getAttribute("id")
                    }
                    else{
                        let allOfDad = dad.getElementsByClassName("Task")
                        let len = allOfDad.length
                        let contadorrr = 0
                        while(contadorrr < len){
                            let target = allOfDad[contadorrr].getElementsByClassName("identificador")[0]
                            if(target.getAttribute("id") == lastTaskSelected){
                                allOfDad[contadorrr].style.border = "2px solid black"
                                break
                            }
                            contadorrr++
                        }
                    }
                })
                taskBody.appendChild(title)
                TaskList.appendChild(taskBody)
                i++
            }
        }
    }
}