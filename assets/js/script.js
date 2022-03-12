//1. add time to #currentDay
//2. add ability to see if the hour has passed yet.
//3. add function to add text to local storage.
//4. add event listener to save button

var currentDay = document.querySelector("#currentDay");

var rightNow = moment().format("dddd MMMM Do");
console.log(rightNow);

(function writeDate() {
  currentDay.textContent = rightNow;
})();
