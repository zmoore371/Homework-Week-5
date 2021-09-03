timeEl = $("#currentDay")
timeBlockTime = $('.hour') //returns an array, can grab current time with timeBlockTime[i] in loop
textArea = $(".textarea")
currentTime = moment().format("k"); // use military time to compare instead of 12 hour. This way instead of having to use moment functions / methods you can just compare with regular logic operators
saveBtn = $(".saveBtn")


function setBackground() {
    for(i=0; i<timeBlockTime.length; i++) {
        rowTime = timeBlockTime[i].innerHTML
        rowTime = moment(rowTime, "h, A" ).format("k")
        rowTime = +rowTime //turns rowTime string into interger to compare
        currentTime = +currentTime // turns current time into interger 
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

// not calling this function yet. will need to after accuratly storing data from text area
function saveToLocal () {
    //textArea is an array. we can likely save just that to local storage and sort it back to screen
    textArea = textArea.text();
    console.log(textArea)
    localStorage.setItem("todo", JSON.stringify(textArea))
    init();
}

saveBtn.on("click", function(event) {
    event.preventDefault(); //not sure i need this, its a save button not submit so I dont think that it will clear the text area since it is not a form
    // saveToLocal();
    console.log('Hello')
    console.log(textArea)

    todos = [];


    for(i=0; i<textArea.length; i++) {
    // data = textArea.val();// only returns value of text entered in the first text area
    data = textArea[i].value;
    //returns TypeError: textArea[i]. val is not a function
    console.log(data)
    todos.push(data)
    }    
    localStorage.setItem("todo", JSON.stringify(todos))
    console.log(todos)
})


function updateTime() {
    timeEl.html(moment().format("ddd, MMMM Do hh:mm:ss"))
}



function init() {
    setInterval(updateTime, 1000)
    setBackground()
}

init();