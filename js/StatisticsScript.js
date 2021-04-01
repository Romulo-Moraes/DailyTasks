//let a = JSON.stringify(window.localStorage.getItem("Statistics"))
//window.alert(a)
//window.localStorage.setItem("Statistics" , null)

let Statistics = JSON.parse(window.localStorage.getItem("Statistics"))
let pourcent = document.getElementById("pourcentOfCompleted")
let attributed = document.getElementById("allAddedTasks")
let DailyDelayedValue = document.getElementById("DailyDelayedValue");
let valueOfFinishedRate = document.getElementById("valueOfFinishedRate")
let progressBarValueOfRateSchool = document.getElementById("progressBarValueOfRateSchool")
let removed = document.getElementById("allRemoved")
let value1 = document.getElementById("value1")
let value2 = document.getElementById("value2")
let value3 = document.getElementById("value3")
let value4 = document.getElementById("value4")
let value5 = document.getElementById("value5")
let PersonalInfo = document.getElementById("PersonalInfo")
let DelayedInfo = document.getElementById("DelayedInfo")
let PersonalProgressBarValue = document.getElementById("PersonalProgressBarValue")
let DailyProgressBarValue = document.getElementById("DailyProgressBarValue")
let DelayedProgressBarValue = document.getElementById("DelayedProgressBarValue")
let DailyInfo = document.getElementById("DailyInfo")
let SchoolInfo = document.getElementById("RateSchoolInfo")

attributed.innerHTML = Statistics.TasksAttributed
removed.innerHTML = Statistics.ExcludedTasks
DailyDelayedValue.innerHTML = Statistics.DelayedDaily;
pourcent.innerHTML = `Finished:${Statistics.CompletedTasks} Total:${Statistics.TasksAttributed}`
let pourcentAccount = 100 * Statistics.CompletedTasks
pourcentAccount = pourcentAccount / Statistics.TasksAttributed
valueOfFinishedRate.style.background = `linear-gradient(to right, green ${pourcentAccount}%, white ${1}%`
if(pourcentAccount.toPrecision(3) != "NaN"){
    value1.innerHTML = `${pourcentAccount.toPrecision(3)}%`
}
else{
    value1.innerHTML = `100%`
}

SchoolInfo.innerHTML = `Finished: ${Statistics.SchoolCompleted} Total: ${Statistics.SchoolTotal}`
let pourcentAccount2 = 100 * Statistics.SchoolCompleted
pourcentAccount2 = pourcentAccount2 / Statistics.SchoolTotal
progressBarValueOfRateSchool.style.background = `linear-gradient(to right, green ${pourcentAccount2}%, white ${0}%`
if(pourcentAccount2.toPrecision(3) != "NaN"){
    value2.innerHTML = `${pourcentAccount2.toPrecision(3)}%`
}
else{
    value2.innerHTML = `100%`
}

PersonalInfo.innerHTML = `Finished: ${Statistics.PersonalCompleted} Total: ${Statistics.PersonalTotal}`
let pourcentAccount3 = 100 * Statistics.PersonalCompleted
pourcentAccount3 = pourcentAccount3 / Statistics.PersonalTotal
PersonalProgressBarValue.style.background = `linear-gradient(to right, green ${pourcentAccount3}%, white ${0}%`
if(pourcentAccount3.toPrecision(3) != "NaN"){
    value3.innerHTML = `${pourcentAccount3.toPrecision(3)}%`
}
else{
    value3.innerHTML = `100%`
}

DailyInfo.innerHTML = `Finished: ${Statistics.DailyCompleted} Total: ${Statistics.DailyTotal}`
let pourcentAccount4 = 100 * Statistics.DailyCompleted
pourcentAccount4 = pourcentAccount4 / Statistics.DailyTotal
DailyProgressBarValue.style.background = `linear-gradient(to right, green ${pourcentAccount4}%, white 0%)`
if(pourcentAccount4.toPrecision(3) != "NaN"){
    value4.innerHTML = `${pourcentAccount4.toPrecision(3)}%`
}
else{
    value4.innerHTML = `100%`
}


DelayedInfo.innerHTML = `Finished: ${Statistics.DelayedCompleted} Total: ${Statistics.DelayedTotal}`
let pourcentAccount5 = 100 * Statistics.DelayedCompleted
pourcentAccount5 = pourcentAccount5 / Statistics.DelayedTotal
DelayedProgressBarValue.style.background = `linear-gradient(to right, green ${pourcentAccount5}%, white 0%)`
if(pourcentAccount5.toPrecision(3) != "NaN"){
    value5.innerHTML = `${pourcentAccount5.toPrecision(3)}%`
}
else{
    value5.innerHTML = `100%`
}

SendNotifications()
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
