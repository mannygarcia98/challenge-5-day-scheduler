//1. add time to #currentDay
//2. add ability to see if the hour has passed yet.
//3. add function to add text to local storage.
//4. add event listener to save button

var currentDay = $("#currentDay");

var rightNow = moment().format("dddd MMMM Do");
console.log(rightNow);
var currentHour = moment().hour();
//test color block function
// var currentHour = 12;
console.log(typeof currentHour);

(function writeDate() {
  currentDay.html(rightNow);
})();

//need an if statement that changes: the current timeblock red, the past blocks gray, and the future blocks green

$(".time-block").each(function () {
  console.log($(this).attr("id"));
  var timeBlockHour = $(this).attr("id").replace("hour", "");
  console.log(timeBlockHour);

  //remove block color if any
  $(this).removeClass("past present future");

  if (timeBlockHour == currentHour) {
    $(this).addClass("present");
  } else if (timeBlockHour < currentHour) {
    $(this).addClass("past");
  } else {
    $(this).addClass("future");
  }
});
