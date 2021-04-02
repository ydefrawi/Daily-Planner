//Selectors
var currentDay = document.getElementById("currentDay")
var thisHour = moment().format("HH")

var rows = document.getElementsByClassName("row")
var allButtons = document.getElementsByClassName("btn")

//Queries for save buttons
var Button1 = document.getElementById("button1")
var Button2 = document.getElementById("button2")
var Button3 = document.getElementById("button3")
var Button4 = document.getElementById("button4")
var Button5 = document.getElementById("button5")
var Button6 = document.getElementById("button6")
var Button7 = document.getElementById("button7")
var Button8 = document.getElementById("button8")
var Button9 = document.getElementById("button9")
var Button10 = document.getElementById("button10")
var Button11 = document.getElementById("button11")
var Button12 = document.getElementById("button12")
var Button13 = document.getElementById("button13")
var Button14 = document.getElementById("button14")
var Button15 = document.getElementById("button15")
var Button16 = document.getElementById("button16")

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
    localStorage.setItem("12AM",input3)
    
})

Button4.addEventListener("click",function(){
    var input4 = textArea4.value;
    console.log("button 4 hit")
    console.log(textArea4.value)
    localStorage.setItem("12PM",input4)
    
})

Button5.addEventListener("click",function(){
    var input5 = textArea5.value;
    console.log("button 5 hit")
    console.log(textArea5.value)
    localStorage.setItem("1PM",input5)
    
})

Button6.addEventListener("click",function(){
    var input6 = textArea6.value;
    console.log("button 6 hit")
    console.log(textArea6.value)
    localStorage.setItem("2PM",input6)
    
})

Button7.addEventListener("click",function(){
    var input7 = textArea7.value;
    console.log("button 7 hit")
    console.log(textArea7.value)
    localStorage.setItem("3PM",input7)
    
})

Button8.addEventListener("click",function(){
    var input8 = textArea8.value;
    console.log("button 8 hit")
    console.log(textArea8.value)
    localStorage.setItem("4PM",input8)
    
})

Button9.addEventListener("click",function(){
    var input9 = textArea9.value;
    console.log("button 9 hit")
    console.log(textArea9.value)
    localStorage.setItem("5PM",input9)
    
})

Button10.addEventListener("click",function(){
    var input10 = textArea10.value;
    console.log("button 10 hit")
    console.log(textArea10.value)
    localStorage.setItem("6PM",input10)
    
})

Button11.addEventListener("click",function(){
    var input11 = textArea11.value;
    console.log("button 11 hit")
    console.log(textArea11.value)
    localStorage.setItem("7PM",input11)
    
})

Button12.addEventListener("click",function(){
    var input12 = textArea12.value;
    console.log("button 12 hit")
    console.log(textArea12.value)
    localStorage.setItem("8PM",input12)
    
})

Button13.addEventListener("click",function(){
    var input13 = textArea13.value;
    console.log("button 13 hit")
    console.log(textArea13.value)
    localStorage.setItem("9PM",input13)
    
})

Button14.addEventListener("click",function(){
    var input14 = textArea14.value;
    console.log("button 14 hit")
    console.log(textArea14.value)
    localStorage.setItem("10PM",input14)
    
})

Button15.addEventListener("click",function(){
    var input15 = textArea15.value;
    console.log("button 15 hit")
    console.log(textArea15.value)
    localStorage.setItem("11PM",input15)
    
})

Button16.addEventListener("click",function(){
    var input16 = textArea16.value;
    console.log("button 16 hit")
    console.log(textArea16.value)
    localStorage.setItem("12PM",input16)
    
})


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

}

//FUNCTION CALLS
populateRows();

//Adds current day to subheader
currentDay.textContent=moment().format("dddd, MMMM Do")
