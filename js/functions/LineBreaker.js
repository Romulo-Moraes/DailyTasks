function lineBR(texto){
    let splitted = texto.split("\n")
    let i = 0
    let len = splitted.length
    let lineCompleted = ""
    while(i < len){
        splitted[i] += "<br/>"
        lineCompleted += splitted[i]
        i++
    }
    return lineCompleted
}