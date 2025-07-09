let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

setInterval(() => {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  hours = hours % 12 || 12;
  hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
  mins.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  secs.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);
