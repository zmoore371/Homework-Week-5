timeEl = $("#currentDay")



function updateTime() {
    timeEl.html(moment().format("ddd, MMMM Do hh:mm:ss"))
}
setInterval(updateTime, 1000)
