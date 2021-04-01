function loadCoockies(){
    let DelayedSchool = JSON.parse(window.localStorage.getItem("DelayedSchoolTasks"))
    if(DelayedSchool == null){
        let json = {
            haveDelayed:false,
            DelayedSchoolTasks:[]
        }
        window.localStorage.setItem("DelayedSchoolTasks", JSON.stringify(json))
    }
    let DelayedPersonal = JSON.parse(window.localStorage.getItem("DelayedPersonalTask"))
    if(DelayedPersonal == null){
        let json = {
            haveDelayed:false,
            DelayedPersonalTask:[]
        }
        window.localStorage.setItem("DelayedPersonalTask", JSON.stringify(json))
    }
    let DelayedDaily = JSON.parse(window.localStorage.getItem("DelayedDailyTask"))
    if(DelayedDaily == null){
        let json = {
            haveDelayed:false,
            DelayedDailyTask:[]
        }
        window.localStorage.setItem("DelayedDailyTask", JSON.stringify(json))
    }
}

loadCoockies()