const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

let counter = 1;
const size = carouselImages[0].clientWidth;

setInterval(() => {
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  counter++;

  if (counter === carouselImages.length) {
    counter = 0;
    setTimeout(() => {
      carouselSlide.style.transition = 'none';
      carouselSlide.style.transform = `translateX(0px)`;
    }, 500);
  }
}, 500);

function abreMenuMobile() {
    const menu = document.querySelector('#menuMobile');
    const btnabre = document.querySelector('#iconeMenuMobile');
    const btnfecha = document.querySelector('#iconeFechaMenuMobile');
    menu.style.display = 'flex';
    btnabre.style.display = 'none';
    btnfecha.style.display = 'flex';
}

function fechaMenuMobile() {
    const menu = document.querySelector('#menuMobile');
    const btnabre = document.querySelector('#iconeMenuMobile');
    const btnfecha = document.querySelector('#iconeFechaMenuMobile');
    menu.style.display = 'none';
    btnabre.style.display = 'flex';
    btnfecha.style.display = 'none';
}