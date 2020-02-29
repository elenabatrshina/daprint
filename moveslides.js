const slide = document.querySelectorAll(".slideInUp-none"),
  cube1 = document.querySelectorAll(".cube1");


function moveSlidesLeft(i) {
  slide[i].classList.remove('slideInUp');
  slide[i].zIndex = 2;


  cube1[i].classList.remove('slideInUp-none');
  cube1[i].classList.add('slideInLeft');
  cube1[i].zIndex = 4;
}

function moveSlidesUp(i) {
  slide[i].classList.remove('slideInUp-none');
  slide[i].classList.add('slideInUp');
  slide[i].zIndex = 4;

  cube1[i].classList.remove('slideInLeft');
  cube1[i].zIndex = 2;
}

setInterval(() => {
  moveSlidesUp(0)
}, 6000)

setTimeout(function run() {
  moveSlidesLeft(0)
  setTimeout(run, 6000);
}, 9000);

setInterval(() => {
  moveSlidesUp(1)
}, 7000)

setTimeout(function run() {
  moveSlidesLeft(1)
  setTimeout(run, 7000);
}, 2000);