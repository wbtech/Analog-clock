setInterval(setClock, 1000);

const hoursHand = document.querySelector("[data-hour]");
const minutesHand = document.querySelector("[data-mins]");
const secondsHand = document.querySelector("[data-secs]");



function setClock() {
  const date = new Date();
  const seconds = date.getSeconds() / 60;
  const minutes = (seconds + date.getMinutes()) / 60;
  const hrs = (minutes + date.getHours()) / 12;
  setRotation(secondsHand, seconds);
  setRotation(minutesHand, minutes);
  setRotation(hoursHand, hrs);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
