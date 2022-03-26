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


// store Item 9
function storeItem9() {
    var task9value = document.getElementById('task9').value;
    localStorage.setItem("key9", task9value);
}

// Event listener button 9 for storing item 9
btn9.addEventListener("click", storeItem9);

// store Item 10
function storeItem10() {
    var task10value = document.getElementById('task10').value;
    localStorage.setItem("key10", task10value);
}

// Event listener for storing item 10
btn10.addEventListener("click", storeItem10);

// store Item 11
function storeItem11() {
    var task11value = document.getElementById('task11').value;
    localStorage.setItem("key11", task11value);
}

// Event listener for storing item 11
btn11.addEventListener("click", storeItem11);

// store Item 12
function storeItem12() {
    var task12value = document.getElementById('task12').value;
    localStorage.setItem("key12", task12value);
}

// Event listener for storing item 12
btn12.addEventListener("click", storeItem12);

// store Item 1
function storeItem1() {
    var task1value = document.getElementById('task1').value;
    localStorage.setItem("key1", task1value);
}

// Event listener for storing item 1
btn1.addEventListener("click", storeItem1);

//  store Item 2
function storeItem2() {
    var task2value = document.getElementById('task2').value;
    localStorage.setItem("key2", task2value);
}

// Event listener for storing item 2
btn2.addEventListener("click", storeItem2);

//  store Item 3
function storeItem3() {
    var task3value = document.getElementById('task3').value;
    localStorage.setItem("key3", task3value);
}

// Event listener for storing item 3
btn3.addEventListener("click", storeItem3);

//   store Item 4
function storeItem4() {
    var task4value = document.getElementById('task4').value;
    localStorage.setItem("key4", task4value);
}

// Event listener for storing item 4
btn4.addEventListener("click", storeItem4);

//   store Item 5
function storeItem5() {
    var task5value = document.getElementById('task5').value;
    localStorage.setItem("key5", task5value);
}

// Event listener for storing item 5
btn5.addEventListener("click", storeItem5);

   
// page load event loads what's in local storage for each time-block
function init() {
    var newTask9 = localStorage.getItem("key9");
    task9.append(newTask9);
    var newTask10 = localStorage.getItem("key10");
    task10.append(newTask10);
    var newTask11 = localStorage.getItem("key11");
    task11.append(newTask11);
    var newTask12 = localStorage.getItem("key12");
    task12.append(newTask12);
    var newTask1 = localStorage.getItem("key1");
    task1.append(newTask1);
    var newTask2 = localStorage.getItem("key2");
    task2.append(newTask2);
    var newTask3 = localStorage.getItem("key3");
    task3.append(newTask3);
    var newTask4 = localStorage.getItem("key4");
    task4.append(newTask4);
    var newTask5 = localStorage.getItem("key5");
    task5.append(newTask5);
}

//  Calls init function
init();