var am9 = $('#am9');
var row9 = $('#row9');

// Capture today's date
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));
console.log(today)

var currentHour = moment().format("hA");
console.log(currentHour)

if (currentHour == am9.text)

// adds class present
row9.addClass('present');