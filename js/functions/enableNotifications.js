function enableNotification(){
    let a = Notification.requestPermission()
    let toClose = document.getElementById("TurnOnNotifications")
    toClose.style.display = "none"
}