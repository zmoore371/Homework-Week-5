timeEl = $("#currentDay")
timeBlockTime = $('.hour') //returns an array, can grab current time with timeBlockTime[i].innerHTML
// timeArray = 


function setBackground() {
    for(i=0; i<timeBlockTime.length; i++) {
        console.log(timeBlockTime[i].innerHTML)
        rowTime = timeBlockTime[i].innerHTML
        rowTime = moment(rowTime, "h, A" ).format("h A")
        console.log(rowTime)

    }

}









console.log(timeBlockTime)
// console.log(timeArray)


function updateTime() {
    timeEl.html(moment().format("ddd, MMMM Do hh:mm:ss"))
}
setInterval(updateTime, 1000)


setBackground()