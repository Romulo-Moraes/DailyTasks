function removeAtask(TasksContainer, idToRemove, taskList ,Type){
    if(Type == "School"){
        let TasksInJsonFormat = JSON.parse(TasksContainer)
        let lenOfTasks = TasksInJsonFormat.SchoolTasks.length
        let i = 0
        while(i < lenOfTasks){
            //window.alert(TasksInJsonFormat.SchoolTasks[i][0] + " " + selectedTask)
            if(TasksInJsonFormat.SchoolTasks[i][0] == selectedTask){
                TasksInJsonFormat.SchoolTasks.splice(i,1)
                window.localStorage.setItem("SchoolTasks", JSON.stringify(TasksInJsonFormat))

            }
            i++
        }
    }
    if(Type == "Personal"){
        let TasksInJsonFormat = JSON.parse(TasksContainer)
        let lenOfTasks = TasksInJsonFormat.PersonalTasks.length
        let i = 0
        while(i < lenOfTasks){
            if(TasksInJsonFormat.PersonalTasks[i][0] == selectedTask){
                TasksInJsonFormat.PersonalTasks.splice(i , 1)  
                window.localStorage.setItem("PersonalTasks", JSON.stringify(TasksInJsonFormat))

            }
            i++
        }
    }

    if(Type == "Daily"){
        let TasksInJsonFormat = JSON.parse(TasksContainer)
        let lenOfTasks = TasksInJsonFormat.DailyTasks.length
        let i = 0
        while(i < lenOfTasks){
            if(TasksInJsonFormat.DailyTasks[i][0] == selectedTask){
                //window.alert(JSON.stringify(TasksInJsonFormat))
                //window.alert(TasksInJsonFormat.DailyTasks[i])
                TasksInJsonFormat.DailyTasks.splice(i, 1)
                //window.alert(JSON.stringify(TasksInJsonFormat))
                window.localStorage.setItem("DailyTasks", JSON.stringify(TasksInJsonFormat))



            }
            i++
        }
    }
    
}