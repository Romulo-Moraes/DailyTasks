function SendNotifications(){
    setInterval(function(){
        if(Notification.permission == "granted"){
            let SchoolTasks = JSON.parse(window.localStorage.getItem("SchoolTasks"))
            let len = SchoolTasks.SchoolTasks.length
            if(len > 0){
                if(len == 1){
                    let Message = new Notification("Task's Manager", {
                        body:"Você possui apenas uma tarefa escolar, que tal fazer ela para ficar livre?"
                    })
                }
                if(len > 1){
                    let Message = new Notification("Task's Manager", {
                        body:"Heey, você ainda possui algumas tarefas escolares!"
                    })
                }
            }
            else{
            
            }
        }
    }, 1800000)

    setInterval(function(){
        if(Notification.permission == "granted"){
            let PersonalTasks = JSON.parse(window.localStorage.getItem("PersonalTasks"))
            let len = PersonalTasks.PersonalTasks.length
            if(len > 0){
                if(len == 1){
                    let Message = new Notification("Task's Manager", {
                        body:"Você possui apenas uma tarefa Pessoal, que tal fazer ela para ficar livre?"
                    })
                }
                if(len > 1){
                    let Message = new Notification("Task's Manager", {
                        body:"Heey, você ainda possui algumas tarefas Pessoais!"
                    })
                }
            }
            else{
            
            }
        }
    }, 2700000)

    setInterval(function(){
        if(Notification.permission == "granted"){
            let DailyTasks = JSON.parse(window.localStorage.getItem("DailyTasks"))
            let len = DailyTasks.DailyTasks.length
            if(len > 0){
                if(len == 1){
                    let Message = new Notification("Task's Manager", {
                        body:"Você possui apenas uma tarefa Diária, que tal fazer ela para ficar livre?"
                    })
                }
                if(len > 1){
                    let Message = new Notification("Task's Manager", {
                        body:"Heey, você ainda possui algumas tarefas Diária!"
                    })
                }
            }
            else{
            
            }
        }
    }, 900000)


}
