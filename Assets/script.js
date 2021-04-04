//Selectors
var currentDay = document.getElementById("currentDay")
var thisHour = moment().format("HH")
var textAreas = document.querySelectorAll("textarea")
console.log(textAreas)
var rows = document.getElementsByClassName("row")
var saveButtons = document.getElementsByClassName("saveBtn")
console.log(saveButtons)
//Queries for save buttons
// var Button1 = document.getElementById("button1")
// var Button2 = document.getElementById("button2")
// var Button3 = document.getElementById("button3")
// var Button4 = document.getElementById("button4")
// var Button5 = document.getElementById("button5")
// var Button6 = document.getElementById("button6")
// var Button7 = document.getElementById("button7")
// var Button8 = document.getElementById("button8")
// var Button9 = document.getElementById("button9")
// var Button10 = document.getElementById("button10")
// var Button11 = document.getElementById("button11")
// var Button12 = document.getElementById("button12")
// var Button13 = document.getElementById("button13")
// var Button14 = document.getElementById("button14")
// var Button15 = document.getElementById("button15")
// var Button16 = document.getElementById("button16")

//Queries for Text Areas
var textArea1 = document.getElementById("textArea1")
var textArea2 = document.getElementById("textArea2")
var textArea3 = document.getElementById("textArea3")
var textArea4 = document.getElementById("textArea4")
var textArea5 = document.getElementById("textArea5")
var textArea6 = document.getElementById("textArea6")
var textArea7 = document.getElementById("textArea7")
var textArea8 = document.getElementById("textArea8")
var textArea9 = document.getElementById("textArea9")
var textArea10 = document.getElementById("textArea10")
var textArea11 = document.getElementById("textArea11")
var textArea12 = document.getElementById("textArea12")
var textArea13 = document.getElementById("textArea13")
var textArea14 = document.getElementById("textArea14")
var textArea15 = document.getElementById("textArea15")
var textArea16 = document.getElementById("textArea16")


console.log("this hour: "+thisHour)

//console.log(moment("8AM","hA").format("hA"))


//Event Listeners -----------------------
//PROBLEMS. I have the keys in the object in 12-hour format 
//But I named buttons and text areas starting from 1 (9PM) through 16 (12AM)
//so right now they don't even match a 24-hour format. 

//I know I could have taken care of all of these with a loop, struggled for a bit.
console.log(typeof saveButtons)

for (const button of saveButtons) {
    console.log(button.id);
    button.addEventListener('click', function(event){
        var textInput = event.target.parentNode.previousElementSibling.firstElementChild.value;
        console.log(event.target.id)
        localStorage.setItem(event.target.id,textInput);
    })
    
}

//Messing with DOM navigation. 
//was going to pull text from text areas and 
//save to local storage using something like this 
console.log("text content of column at index 0: " + rows[0].children[0].textContent.trim())


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

    console.log(moment().format('HH'))
    for (const textarea of textAreas) {
        if (textarea.dataset.hour < thisHour){
            console.log("hey")
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
