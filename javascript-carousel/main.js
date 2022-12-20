var img = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var image = document.querySelector('img');
var dot = document.querySelectorAll('.dot');
var group = document.querySelector('.grouped');

var slide = null;

var amount = 1;

function slideshow() {
  if (amount < img.length) {
    image.src = img[amount];
    dot[(amount)].className = 'dot black';
    dot[(amount - 1)].className = 'dot';
    amount++;
  } else {
    amount = 0;
    image.src = img[amount];
    dot[(amount)].className = 'dot black';
    dot[(amount + 4)].className = 'dot';
    amount++;
  }
}

slide = setInterval(slideshow, 3000);
var move = document.querySelector('.fa-angle-right');
move.addEventListener('click', function () {
  slideshow();
  clearInterval(slide);
  slide = setInterval(slideshow, 3000);
});

var goback = document.querySelector('.fa-angle-left');
goback.addEventListener('click', function () {
  if (amount > 1) {
    amount -= 2;
    image.src = img[amount];
    dot[(amount)].className = 'dot black';
    dot[(amount + 1)].className = 'dot';
    amount++;
    clearInterval(slide);
    slide = setInterval(slideshow, 3000);
  } else {
    amount = 5;
    image.src = img[amount - 1];
    dot[0].className = 'dot black';
    clearInterval(slide);
    slide = setInterval(slideshow, 3000);
  }
});

group.addEventListener('click', function (event) {
  if (event.target.matches('span')) {
    var events = event.target;
    for (var i = 0; i < dot.clientHeight; i++) {
      if (dot[i].id === events.id) {
        dot[i].className = 'dot black';
        clearInterval(slide);
        slide = setInterval(slideshow, 3000);
      } else {
        dot[i].className = 'dot';
        clearInterval(slide);
        slide = setInterval(slideshow, 3000);
      }
    }
    image.src = img[Number(events.id)];
    amount = Number(events.id) + 1;
  }
});
