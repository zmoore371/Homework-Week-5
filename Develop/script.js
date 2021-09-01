timeEl = $("#currentDay")
timeBlockTime = $('.hour') //returns an array, can grab current time with timeBlockTime
textArea = $(".textarea")
currentTime = moment().format("k");

function setBackground() {
    for(i=0; i<timeBlockTime.length; i++) {
        rowTime = timeBlockTime[i].innerHTML
        rowTime = moment(rowTime, "h, A" ).format("k")
        rowTime = +rowTime
        currentTime = +currentTime
        console.log("rowTime", rowTime)
        console.log("currentTime", currentTime)
        console.log(timeBlockTime)


        if (rowTime < currentTime){
            data = timeBlockTime[i].nextElementSibling.closest("textarea")
            data.classList.add("past")
        } else if (rowTime === currentTime) {
            data = timeBlockTime[i].nextElementSibling.closest("textarea")
            data.classList.add("present")
        } else {
            data = timeBlockTime[i].nextElementSibling.closest("textarea")
            data.classList.add("future")
        }

}
}









// console.log(timeArray)


function updateTime() {
    timeEl.html(moment().format("ddd, MMMM Do hh:mm:ss"))
}
setInterval(updateTime, 1000)


setBackground()