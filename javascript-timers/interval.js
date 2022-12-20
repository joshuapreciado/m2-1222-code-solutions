var countdown = document.querySelector('.countdown-display');
var timer = 4;

function testCountdown() {
  timer--;
  if (countdown.textContent > 1) {
    countdown.textContent = timer;
  } else {
    countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(process);
  }
}

var process = setInterval(testCountdown, 1000);
