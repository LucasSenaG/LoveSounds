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

function maeparTelas() {
  const home = document.querySelector(".home");
  const fotos = document.querySelector(".fotos");
  const sobre = document.querySelector(".sobre");
  const depoimentos = document.querySelector(".depoimentos");
  const telaAtual = document.querySelector("#telaAtual");

  return [home, fotos, sobre, depoimentos, telaAtual];
}

function abreHome() {
  // const telas = maeparTelas();
  // telas[0].style.display = 'flex';
  // telas[1].style.display = 'none';
  // telas[2].style.display = 'none';
  // telas[3].style.display = 'none';
  telaAtual.textContent = 'home';
}

function abreFotos() {
  const telas = maeparTelas();
  // telas[0].style.display = 'none';
  // telas[1].style.display = 'flex';
  // telas[2].style.display = 'none';
  // telas[3].style.display = 'none';
  telaAtual.textContent = 'fotos';
}

function abreSobre() {
  const telas = maeparTelas();
  // telas[0].style.display = 'none';
  // telas[1].style.display = 'none';
  // telas[2].style.display = 'flex';
  // telas[3].style.display = 'none';
  telaAtual.textContent = 'Sobre Nós';
}

function abreDepoimentos() {
  const telas = maeparTelas();
  // telas[0].style.display = 'none';
  // telas[1].style.display = 'none';
  // telas[2].style.display = 'none';
  // telas[3].style.display = 'flex';
  telaAtual.textContent = 'depoimentos';
}

// CARROSSEL FOTOS
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});

