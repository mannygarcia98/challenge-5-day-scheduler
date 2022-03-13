// *****Global Variables*****
var dateElement = $("#currentDay");
var currentDate = moment().format("dddd MMMM Do");
var currentHour = moment().hour();

// adds date to header
dateElement.html(currentDate);

//add background color and get local storage
$(".time-block").each(function () {
  //gets hour number from id name
  var timeBlockHour = parseInt($(this).attr("id").replace("hour", ""));
  //reset block color
  $(this).removeClass("past present future");

  //add block color
  if (timeBlockHour === currentHour) {
    $(this).addClass("present");
  } else if (timeBlockHour < currentHour) {
    $(this).addClass("past");
  } else {
    $(this).addClass("future");
  }
  //get values from local storage if any
  $("#hour" + timeBlockHour + " .description").val(localStorage.getItem("hour" + timeBlockHour));
});

//saves description to local storage on button click
$(".saveBtn").on("click", function () {
  var hour = $(this).parent().attr("id");
  var description = $(this).siblings(".description").val();

  localStorage.setItem(hour, description);
});
