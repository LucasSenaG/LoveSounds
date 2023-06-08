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
  const telas = document.querySelectorAll('.nomeTela');
  return telas;
}

function abreHome() {
  const telas = maeparTelas();
  console.log(telas);
  telas[0].style.opacity = 1;
  telas[1].style.opacity = 0.3;
  telas[2].style.opacity = 0.3;
  telas[3].style.opacity = 0.3;
  telaAtual.textContent = 'home';
}

function abreFotos() {
  const telas = maeparTelas();
  telas[1].style.opacity = 1;
  telas[0].style.opacity = 0.3;
  telas[2].style.opacity = 0.3;
  telas[3].style.opacity = 0.3;
  telaAtual.textContent = 'fotos';
}

function abreDepoimentos() {
  const telas = maeparTelas();
  telas[2].style.opacity = 1;
  telas[0].style.opacity = 0.3;
  telas[1].style.opacity = 0.3;
  telas[3].style.opacity = 0.3;
  telaAtual.textContent = 'depoimentos';
}

function abreSobre() {
  const telas = maeparTelas();
  telas[3].style.opacity = 1;
  telas[0].style.opacity = 0.3;
  telas[1].style.opacity = 0.3;
  telas[2].style.opacity = 0.3;
  telaAtual.textContent = 'Sobre Nós';
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


//ALTURA DA PÁGINA
function coletaAlturaUsuario(){
  let alturaPagina = document.documentElement.scrollTop;
  console.log ("Altura da página é:" + alturaPagina + "Pixels.");
}

setInterval (coletaAlturaUsuario, 1000);