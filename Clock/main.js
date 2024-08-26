const secondsHand = document.querySelector(".sec-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

function setDate() {
  const currentDate = new Date();

  const seconds = currentDate.getSeconds();
  const secondsDegree = (seconds / 60) * 360;
  secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

  const minutes = currentDate.getMinutes();
  const minutesDegree = (minutes / 60) * 360;
  minutesHand.style.transform = `rotate(${minutesDegree}deg)`;

  const hours = currentDate.getHours();
  const hoursDegree = ((hours % 12) + minutes / 60) * 30;
  hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);
