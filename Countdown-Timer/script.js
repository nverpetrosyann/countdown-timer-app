let myBirthday = "1 Jan 2025"

let day = document.getElementById("days")
let hour = document.getElementById("hours")
let min = document.getElementById("mins")
let second = document.getElementById("seconds")


function CountDown () {
    let myBirthdayDate = new Date(myBirthday)
    let currentDate = new Date()

    let totalSeconds = (myBirthdayDate - currentDate) / 1000

    let days = Math.floor(totalSeconds / 3600 / 24)
    let hours = Math.floor(totalSeconds / 3600) % 24
    let mins = Math.floor(totalSeconds / 60) % 60
    let seconds = Math.floor(totalSeconds % 60)

   
    day.innerHTML = days
    hour.innerHTML = formatDate(hours)
    min.innerHTML = formatDate(mins)
    second.innerHTML = formatDate(seconds)



}

function formatDate (time) {
    return time < 10 ? `0${time}` : time
}
CountDown()

setInterval(CountDown,1000)