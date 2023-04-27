const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

let timerInterval = null;

btnStart.addEventListener('click', onClickStart);
btnStop.addEventListener('click', onClickStop);

function onClickStart(){
  timerInterval = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
    btnStart.disabled = true;
  }, 1000)
}

function onClickStop(){
  clearInterval(timerInterval);
  // btnStart.disabled = false;
  btnStop.disabled = true;

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

