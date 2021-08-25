const d = new Date()
let hours = d.getHours()
let minutes = d.getMinutes()
let seconds = d.getSeconds()


if (seconds < 10) {
    seconds = '0' + d.getSeconds()
}
if (minutes < 10) {
    minutes = '0' + d.getMinutes()
} if (hours < 10) {
    hours = '0' + d.getHours()
}
console.log(`${hours}:${minutes}:${seconds}`)
