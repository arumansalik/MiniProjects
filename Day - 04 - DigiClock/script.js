let hrs = document.getElementById("hrs");
let min = document.getElementById("mins");
let sec = document.getElementById("secs");

setInterval(() => {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  hours = hours % 12 || 12;
  hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
  min.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);
