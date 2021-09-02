timeEl = $("#currentDay")
timeBlockTime = $('.hour') //returns an array, can grab current time with timeBlockTime
textArea = $(".textarea")
currentTime = moment().format("k");
saveBtn = $(".saveBtn")


function setBackground() {
    for(i=0; i<timeBlockTime.length; i++) {
        rowTime = timeBlockTime[i].innerHTML
        rowTime = moment(rowTime, "h, A" ).format("k")
        rowTime = +rowTime
        currentTime = +currentTime
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


function saveToLocal () {
    //textArea is an array. we can likely save just that to local storage and sort it back to screen
    textArea = textArea.text();
    console.log(textArea)
    localStorage.setItem("todo", JSON.stringify(textArea))
    init();
}

saveBtn.on("click", function(event) {
    saveToLocal();
    console.log('Hello')
})


function updateTime() {
    timeEl.html(moment().format("ddd, MMMM Do hh:mm:ss"))
}



function init() {
    setInterval(updateTime, 1000)
    setBackground()

}

init();