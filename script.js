// Set the date we're counting down to
const countDownDate = new Date("Oct 30, 2021 00:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id=""
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // ! If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);

// function for button 
let button = document.getElementById("btn");

// ? Using Normal Call Function
// function clickBtn() {
//    return location.href = "https://www.instagram.com/_ishivam";
// }

// ! Using Arrow Function 
let clickBtn = () =>  location.href = "https://www.github.com/ishivamm";

button.addEventListener("click",clickBtn);













// // ! Timer Using Variable(Var)
// // Set the date we're counting down to
// var countDownDate = new Date("Oct 30, 2021 00:00:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id=""
//   document.getElementById("days").innerHTML = days;
//   document.getElementById("hours").innerHTML = hours;
//   document.getElementById("minutes").innerHTML = minutes;
//   document.getElementById("seconds").innerHTML = seconds;

//   // ! If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("days").innerHTML = "00";
//     document.getElementById("hours").innerHTML = "00";
//     document.getElementById("minutes").innerHTML = "00";
//     document.getElementById("seconds").innerHTML = "00";
//   }
// }, 1000);

// // function for button 
// var button = document.getElementById("btn");

// // ? Using Normal Call Function
// // function clickBtn() {
// //    return location.href = "https://www.instagram.com/_ishivam";
// // }

// // ! Using Arrow Function 
// var clickBtn = () =>  location.href = "https://www.instagram.com/_ishivam";

// button.addEventListener("click",clickBtn);