//SELECTORS--------------------------------------
var currentDay = document.getElementById("currentDay")
var thisHour = moment().format("HH")
var textAreas = document.querySelectorAll("textarea")
var rows = document.getElementsByClassName("row")
var saveButtons = document.getElementsByClassName("saveBtn")


//EVENT LISTENERS -----------------------

for (const button of saveButtons) {
    // console.log(button.id);
    button.addEventListener('click', function(event){
        var textInput = event.target.parentNode.previousElementSibling.firstElementChild.value;
        // console.log(event.target.id)
        localStorage.setItem(event.target.id,textInput);
    })
    
}

//FUNCTIONS ----------------------

//function that renders all items from localStorage onto the page
function populateRows() {
    textArea1.innerHTML=localStorage.getItem("9AM")
    textArea2.innerHTML=localStorage.getItem("10AM")
    textArea3.innerHTML=localStorage.getItem("11AM")
    textArea4.innerHTML=localStorage.getItem("12PM")
    textArea5.innerHTML=localStorage.getItem("1PM")
    textArea6.innerHTML=localStorage.getItem("2PM")
    textArea7.innerHTML=localStorage.getItem("3PM")
    textArea8.innerHTML=localStorage.getItem("4PM")
    textArea9.innerHTML=localStorage.getItem("5PM")
    textArea10.innerHTML=localStorage.getItem("6PM")
    textArea11.innerHTML=localStorage.getItem("7PM")
    textArea12.innerHTML=localStorage.getItem("8PM")
    textArea13.innerHTML=localStorage.getItem("9PM")
    textArea14.innerHTML=localStorage.getItem("10PM")
    textArea15.innerHTML=localStorage.getItem("11PM")
    textArea16.innerHTML=localStorage.getItem("12PM")

    for (const textarea of textAreas) {
        if (textarea.dataset.hour < thisHour){
            textarea.classList.add('past')
            textarea.classList.remove('present')
            textarea.classList.remove('future')
        } else if (textarea.dataset.hour > thisHour) {
            textarea.classList.add('future')
            textarea.classList.remove('past')
            textarea.classList.remove('present')
        } else {
            textarea.classList.add('present')
            textarea.classList.remove('past')
            textarea.classList.remove('future')
        }
        
    }
}


function clearStorage(){
    localStorage.clear();
    populateRows();
}

document.querySelector('#delete-btn').addEventListener('click', clearStorage)

//FUNCTION CALLS
populateRows();

//Adds current day to subheader
currentDay.textContent=moment().format("dddd, MMMM Do")
