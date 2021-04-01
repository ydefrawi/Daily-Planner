//Selectors
var currentDay = document.getElementById("currentDay")
var rows = document.getElementsByClassName("row")
var thisHour = moment().format("HH")
var Button1 = document.getElementById("button1")
var Button2 = document.getElementById("button2")
var Button3 = document.getElementById("button3")
var textArea1 = document.getElementById("textArea1")
var textArea2 = document.getElementById("textArea2")
var textArea3 = document.getElementById("textArea3")

console.log(Button1)
console.log("this hour: "+thisHour)


console.log(moment("8AM","hA").format("hA"))


//Event Listeners -----------------------
Button1.addEventListener("click",function(){
    var input1 = textArea1.value;
    console.log("button 1 hit")
    console.log(textArea1.value)
    localStorage.setItem("9AM",input1)
})

Button2.addEventListener("click",function(){
    var input2 = textArea2.value;
    console.log("button 2 hit")
    console.log(textArea2.value)
    localStorage.setItem("10AM",input2)
    
})

Button3.addEventListener("click",function(){
    var input3 = textArea3.value;
    console.log("button 3 hit")
    console.log(textArea3.value)
    localStorage.setItem("11AM",input3)
    
})


//Functions---------------------------

// if(rows[0].children[0].textContent.trim()){
//     change class of the this column to green
// }


console.log("text content of column at index 0: " + rows[0].children[1].textContent.trim())


// function populateStorage () {
//     localStorage.setItem("9AM","")
//     localStorage.setItem("10AM","")
//     localStorage.setItem("11AM","")
//     localStorage.setItem("12PM","")
//     localStorage.setItem("1PM","")
//     localStorage.setItem("2PM","")
//     localStorage.setItem("3PM","")
//     localStorage.setItem("4PM","")
//     localStorage.setItem("5PM","")
//     localStorage.setItem("6PM","")
//     localStorage.setItem("7PM","")
//     localStorage.setItem("8PM","")
//     localStorage.setItem("9PM","")
//     localStorage.setItem("10PM","")
//     localStorage.setItem("11PM","")
//     localStorage.setItem("12AM","")

// }

function populateRows() {

    textArea1.innerHTML=localStorage.getItem("9AM")
    textArea2.innerHTML=localStorage.getItem("10AM")
    textArea3.innerHTML=localStorage.getItem("11AM")
}

populateRows();
// populateStorage();
console.log(localStorage)

//adds current day to subheader
currentDay.textContent=moment().format("dddd, MMMM Do")
