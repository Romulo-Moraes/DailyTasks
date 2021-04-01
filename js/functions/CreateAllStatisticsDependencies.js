function CreateDependencies(){
    let Dependencies = JSON.parse(window.localStorage.getItem("Statistics"))
    if(Dependencies == null){
        
        let json = {
            TasksAttributed:0,
            CompletedTasks:0,
            ExcludedTasks:0,
            SchoolCompleted:0,
            SchoolTotal:0,
            PersonalCompleted:0,
            PersonalTotal:0,
            DailyCompleted:0,
            DailyTotal:0,
            DelayedCompleted:0,
            DelayedTotal:0,
            DelayedDaily:0
        }
        window.localStorage.setItem("Statistics",JSON.stringify(json))
    }
}
CreateDependencies()