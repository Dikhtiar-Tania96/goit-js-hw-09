const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
btnStop.disabled = true;

let timerInterval = null;

btnStart.addEventListener('click', onClickStart);
btnStop.addEventListener('click', onClickStop);

function onClickStart(){
  btnStart.disabled = true;
  btnStop.disabled = false;
  timerInterval = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000)
}

function onClickStop(){
  clearInterval(timerInterval);
  btnStart.disabled = false;
  btnStop.disabled = true;

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

