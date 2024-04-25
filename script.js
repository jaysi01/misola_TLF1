let lights = document.querySelectorAll('.light');
let currentLight = 0;
let timer = null;

function switchLight() {
  lights[currentLight].classList.remove('active');
  currentLight = (currentLight + 1) % 3;
  lights[currentLight].classList.add('active');
  timer = setTimeout(switchLight, getRandomTime());
}

function getRandomTime() {
  return Math.floor(Math.random() * (9000 - 6000 )) + 90;
}

switchLight();
