const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

let timerInterval = null;

btnStart.addEventListener('click', onClickStart);
btnStop.addEventListener('click', onClickStop);

function onClickStart(evt) {
  btnStart.disabled = true;
  btnStop.disables = false;

  bgColor();
  timerInterval = setInterval(bgColor, 1000);
}

function onClickStop(evt) {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(timerInterval);
}

function bgColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
