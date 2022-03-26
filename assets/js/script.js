// Capture today's date
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));
console.log(today)

// Finds current hour
var currentHour = moment().format("H");
console.log(currentHour)

//  9AM
var task9 = $('#task9');

// adds class past
if (currentHour > 9) {
    task9.addClass('past');
}
// adds class future
if (currentHour < 9) {
    task9.addClass('future');
}
// adds class present
if (currentHour == 9) {
    task9.addClass('present');
}

//  10AM
var task10 = $('#task10');

// adds class past
if (currentHour > 10) {
    task10.addClass('past');
}
// adds class future
if (currentHour < 10) {
    task10.addClass('future');
}
// adds class present
if (currentHour == 10) {
    task10.addClass('present');
}

//  11AM
var task11 = $('#task11');

// adds class past
if (currentHour > 11) {
    task11.addClass('past');
}
// adds class future
if (currentHour < 11) {
    task11.addClass('future');
}
// adds class present
if (currentHour == 11) {
    task11.addClass('present');
}

//  12PM
var task12 = $('#task12');

// adds class past
if (currentHour > 12) {
    task12.addClass('past');
}
// adds class future
if (currentHour < 12) {
    task12.addClass('future');
}
// adds class present
if (currentHour == 12) {
    task12.addClass('present');
}

//  1PM
var task1 = $('#task1');

// adds class past
if (currentHour > 13) {
    task1.addClass('past');
}
// adds class future
if (currentHour < 13) {
    task1.addClass('future');
}
// adds class present
if (currentHour == 13) {
    task1.addClass('present');
}

//  2PM
var task2 = $('#task2');

// adds class past
if (currentHour > 14) {
    task2.addClass('past');
}
// adds class future
if (currentHour < 14) {
    task2.addClass('future');
}
// adds class present
if (currentHour == 14) {
    task2.addClass('present');
}

//  3PM
var task3 = $('#task3');

// adds class past
if (currentHour > 15) {
    task3.addClass('past');
}
// adds class future
if (currentHour < 15) {
    task3.addClass('future');
}
// adds class present
if (currentHour == 15) {
    task3.addClass('present');
}

//  4PM
var task4 = $('#task4');

// adds class past
if (currentHour > 16) {
    task4.addClass('past');
}
// adds class future
if (currentHour < 16) {
    task4.addClass('future');
}
// adds class present
if (currentHour == 16) {
    task4.addClass('present');
}

//  5PM
var task5 = $('#task5');

// adds class past
if (currentHour > 17) {
    task5.addClass('past');
}
// adds class future
if (currentHour < 17) {
    task5.addClass('future');
}
// adds class present
if (currentHour == 17) {
    task5.addClass('present');
}

var btn9 = document.getElementById("btn9");
var btn10 = document.getElementById("btn10");
var btn11 = document.getElementById("btn11");
var btn12 = document.getElementById("btn12");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");


var key9 = 9;
var value9 = document.getElementById('#task9');

function setTask9() {
    // Set Item
localStorage.setItem("key9", value9);
// Retrieve Item
document.getElementBykey("9").innerHTML = localStorage.getItem("input9");
};

btn9.addEventListener("click", setTask9);
btn10.addEventListener("click", setTask10);
btn11.addEventListener("click", setTask11);
btn12.addEventListener("click", setTask12);
btn1.addEventListener("click", setTask1);
btn2.addEventListener("click", setTask2);
btn3.addEventListener("click", setTask3);
btn4.addEventListener("click", setTask4);
btn5.addEventListener("click", setTask5);