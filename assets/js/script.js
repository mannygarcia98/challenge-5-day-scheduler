//✅ 1. add time to #currentDay
//✅ 2. add ability to see if the hour has passed yet.
//✅ 3. add event listener to save button
//4. add corresponding key and value for local storage on button click
// 5. create function to retrieve values from local storage
//6. refactor code

var currentDay = $("#currentDay");
var rightNow = moment().format("dddd MMMM Do");
var currentHour = moment().hour();

(function writeDate() {
  currentDay.html(rightNow);
})();

//add background color depending on time of day
$(".time-block").each(function () {
  //gets current time from id name dropping the 'hour'
  var timeBlockHour = $(this).attr("id").replace("hour", "");
  //remove block color if any
  $(this).removeClass("past present future");

  if (timeBlockHour == currentHour) {
    $(this).addClass("present");
  } else if (timeBlockHour < currentHour) {
    $(this).addClass("past");
  } else {
    $(this).addClass("future");
  }
  //get values from local storage if any
  //need a loop that will change just the hour and repeat for each time block
  $("#hour" + timeBlockHour + " .description").val(localStorage.getItem("hour" + timeBlockHour));
});

//saves description to local storage on button click
$(".saveBtn").on("click", function () {
  var hour = $(this).parent().attr("id");
  var description = $(this).siblings(".description").val();
  console.log(hour);
  console.log(description);
  localStorage.setItem(hour, description);
});
