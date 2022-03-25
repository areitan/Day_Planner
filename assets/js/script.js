// Capture today's date
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));
console.log(today)

// Finds current hour
var currentHour = moment().format("h");
console.log(currentHour)

var am9 = parseInt($('#am9'));
var row9 = $('#row9');


if (currentHour > $(am9).text()) {
    // adds class present
    row9.addClass('past');
    // else if()
}

var am10 = parseInt($('#am10'));
var row10 = $('#row10');

if (currentHour > $(am10).text()) {
    // adds class present
    row10.addClass('past');
}
