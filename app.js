const TIME = document.getElementById("MyClockDisplay");

function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;

  TIME.textContent = time;

  setTimeout(showTime, 1000);
}

showTime();

// function showTime() {
//   var date = new Date();
//   var hour = date.getHours();
//   var minute = date.getMinutes();
//   var second = date.getSeconds();
//   var session = "am";

//   if (hour == 0) {
//     hour = 12;
//   }

//   if (hour > 12) {
//     hour = hour - 12;
//     session = "pm";
//   }

//   hour = hour < 10 ? "0" + hour : hour;
//   minute = minute < 10 ? "0" + minute : minute;
//   second = second < 10 ? "0" + second : second;

//   var time = hour + ":" + minute + ":" + second + " " + session;
//   document.getElementById("MyClockDisplay").innerText = time;
//   document.getElementById("MyClockDisplay").textContent = time;

//   setTimeout(showTime, 1000);
// }

// showTime();

// const showtext = document.querySelector(".showtext");
// const content = document.querySelector(".content");
// const closeModal = document.querySelector(".closeModal");

// function callback() {
//   showtext.style.display = " block";
// }

// function cl() {
//   console.log("heloo bro");
// }

// function close() {
//   showtext.style.display = "none";
// }

// closeModal.addEventListener("click", close);
// setTimeout(callback, 5000);
// setInterval(callback, 3000);

// const Time = document.getElementById("time");

// function time() {
//   time = new Date();
//   Time.innerText = time;
// }

// setInterval(time, 1000);
