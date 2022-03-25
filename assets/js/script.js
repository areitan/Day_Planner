// Capture today's date
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));
console.log(today)

// Finds current hour
var currentHour = moment().format("h");
console.log(currentHour)

var am9 = parseInt($('#am9'));
var task9 = $('#task9');

// adds class past
if (currentHour > $(am9).text()) {
    task9.addClass('past');
}
// adds class future
if (currentHour < $(am9).text()) {
    task9.addClass('future');
}
// adds class present
if (currentHour == $(am9).text()) {
    task9.addClass('present');
}
