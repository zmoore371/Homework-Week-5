timeEl = $("#currentDay");
timeBlockTime = $('.hour');
textArea = $(".textarea");
currentTime = moment().format("k"); 
saveBtn = $(".saveBtn");

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

function setTodos() {
    todos = JSON.parse(localStorage.getItem("todo"))

    if (todos !== null) { //this keeps the javascript from f'in up if nothing has ever been saved to the local storage
    for(i=0; i<textArea.length; i++) {
        textArea[i].value = todos[i];
    }
    } else {
        return;
    }

}

saveBtn.on("click", function(event) {
    event.preventDefault();
    todos = [];
    for(i=0; i<textArea.length; i++) {
    data = textArea[i].value;
    console.log(data)
    todos.push(data)
    }    
    localStorage.setItem("todo", JSON.stringify(todos))
    
})

function updateTime() {
    timeEl.html(moment().format("ddd, MMMM Do hh:mm:ss"))
}

function init() {
    setTodos();
    setInterval(updateTime, 1000)
    setBackground()
}


// textArea[1].value = "hello" Left this in here for reference on how to set text area value. Im sure it will come in handy in  the future. Not relevant to the program at all.
init();