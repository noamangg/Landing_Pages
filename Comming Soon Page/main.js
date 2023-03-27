let addZeroes = (n) => (n < 10 ? `0${n}` : n);
function countUp() {
  let currentTime = new Date();
  let divideTime;
  openingTime > currentTime
    ? (divideTime = openingTime - currentTime)
    : (divideTime = currentTime - openingTime);

  let oneMin = 60 * 1000;
  let oneHr = oneMin * 60;
  let oneDay = oneHr * 24;
  counterDay = Math.floor(divideTime / oneDay);
  counterHr = Math.floor((divideTime % oneDay) / oneHr);
  counterMin = Math.floor((divideTime % oneHr) / oneMin);
  counterSec = Math.floor((divideTime % oneMin) / 1000);
  secondsSpan.textContent = addZeroes(counterSec);
  minutesSpan.textContent = addZeroes(counterMin);
  hoursSpan.textContent = addZeroes(counterHr);
  daysSpan.textContent = addZeroes(counterDay);
}

let secondsSpan = document.querySelector(".seconds");
let minutesSpan = document.querySelector(".minutes");
let hoursSpan = document.querySelector(".hours");
let daysSpan = document.querySelector(".days");

let counterDay, counterHr, counterMin, counterSec;
let openingTime = new Date(2023, 3, 22, 10, 24, 22, 23);
console.log(secondsSpan);

let i = setInterval(countUp, Number.MAX_VALUE);


// Validate in Js
let emailForms = document.forms[0].querySelector(`input[type="email"]`);
let submitForms = document.forms[0].querySelector(`input[type="submit"]`);
console.log(submitForms)
console.log(emailForms)

document.forms[0].onsubmit = function(e) {
  if(!(emailForms.value).includes("gmail.com"))
  e.preventDefault();
}
