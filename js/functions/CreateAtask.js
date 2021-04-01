function createTask(ID, title,desc,init,end, dad, Type){
    if(Type != "Daily"){
        let taskBody2 = document.createElement("div")
        taskBody2.classList.add("Task")
        let ID2 = document.createElement("h2")
        ID2.textContent = `ID: ${ID}`
        ID2.classList.add("identificador")
        ID2.id = ID
        ID2.setAttribute("init" , init)
        ID2.setAttribute("end" , end)
        let title2 = document.createElement("h2")
        title2.textContent = `Titulo: ${title}`
        let description2 = document.createElement("h2")
        description2.innerHTML = `Descrição:<br/>${lineBR(desc)}`
        let init2 = document.createElement("h2")
        init2.textContent = `Inicio da atribuição: ${init}`
        let end2 = document.createElement("h2")
        end2.textContent = `Data de encerramento: ${end}`
        taskBody2.addEventListener("click", function(){
            let target = this.getElementsByClassName("identificador")[0]
            selectedTask = target.getAttribute("id")
            this.style.border = "2px solid red"
        })
       
        let incrementStatistics = JSON.parse(window.localStorage.getItem("Statistics"))
        if(Type == "School"){
            incrementStatistics.SchoolTotal += 1
            incrementStatistics.TasksAttributed += 1
        }
        if(Type == "Personal"){
            incrementStatistics.PersonalTotal += 1
            incrementStatistics.TasksAttributed += 1
        }
        window.localStorage.setItem("Statistics", JSON.stringify(incrementStatistics))
        
        taskBody2.appendChild(ID2)
        taskBody2.appendChild(title2)
        taskBody2.appendChild(description2)
        taskBody2.appendChild(init2)
        taskBody2.appendChild(end2)
        dad.appendChild(taskBody2)
    }
    else{
        let TaskBody = document.createElement("div")
        TaskBody.classList.add("Task")
        let titlee = document.createElement("h2")
        titlee.textContent = `Task: ${title}`
        titlee.setAttribute("id", ID)
        titlee.setAttribute("class","identificador" )
        titlee.setAttribute("init" , init)
        titlee.setAttribute("end", end)
        TaskBody.addEventListener("click", function(){
            
            let identificator = this.getElementsByClassName("identificador")[0]
            selectedTask = identificator.getAttribute("id")
            this.style.border = "2px solid red"
            if(lastTaskSelected == null){
                lastTaskSelected = identificator.getAttribute("id")
            }
            else{
                let allOfDad = dad.getElementsByClassName("Task")
                let len = allOfDad.length
                let i = 0
                while(i < len){
                    let target = allOfDad[i].getElementsByClassName("identificador")[0]
                    if(target.getAttribute("id") == lastTaskSelected){
                        allOfDad[i].style.border = "2px solid black"
                        break
                    }
                    i++
                }
            }

        })
        TaskBody.appendChild(titlee)
        dad.appendChild(TaskBody )
    }
}