var count = 3;
const int = setInterval(() => {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    console.log('Blast Off!');
    clearInterval(int);
  }
}, 1000);
