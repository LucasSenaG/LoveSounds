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

function calculasessaoatual() {
  // Obtém a referência para a seção
  const section = document.querySelector('section');

  // Obtém a distância entre o topo da seção e o topo da página em pixels
  const sectionTopPixels = section.offsetTop - document.documentElement.getBoundingClientRect().top + window.scrollY;

  // Obtém a altura da janela de visualização
  const windowHeight = window.innerHeight;

  // Calcula a distância em porcentagem
  const sectionTopPercentage = (sectionTopPixels / windowHeight) * 100;

  // console.log('Distância entre o topo da seção e o topo da página em porcentagem:', sectionTopPercentage);

  //Home = 0 
  //Foto = 199
  //Depoimento = 389 
  //Sobre Nós = 560 

  if (sectionTopPercentage >= 0) {
    const telas = maeparTelas();
    telas[0].style.opacity = 1;
    telas[1].style.opacity = 0.3;
    telas[2].style.opacity = 0.3;
    telas[3].style.opacity = 0.3;
    telaAtual.textContent = 'home';
  }

  if (sectionTopPercentage >= 180) {
    const telas = maeparTelas();
    telas[1].style.opacity = 1;
    telas[0].style.opacity = 0.3;
    telas[2].style.opacity = 0.3;
    telas[3].style.opacity = 0.3;
    telaAtual.textContent = 'fotos';
  }

  if (sectionTopPercentage >= 365) {
    const telas = maeparTelas();
    telas[2].style.opacity = 1;
    telas[0].style.opacity = 0.3;
    telas[1].style.opacity = 0.3;
    telas[3].style.opacity = 0.3;
    telaAtual.textContent = 'depoimentos';
  }

  if (sectionTopPercentage >= 550) {
    const telas = maeparTelas();
    telas[3].style.opacity = 1;
    telas[0].style.opacity = 0.3;
    telas[1].style.opacity = 0.3;
    telas[2].style.opacity = 0.3;
    telaAtual.textContent = 'Sobre Nós';
  }

}

setInterval(calculasessaoatual, 500);

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

function calculasessaoatual() {
  // Obtém a referência para a seção
  const section = document.querySelector('section');

  // Obtém a distância entre o topo da seção e o topo da página em pixels
  const sectionTopPixels = section.offsetTop - document.documentElement.getBoundingClientRect().top + window.scrollY;

  // Obtém a altura da janela de visualização
  const windowHeight = window.innerHeight;

  // Calcula a distância em porcentagem
  const sectionTopPercentage = (sectionTopPixels / windowHeight) * 100;

  // console.log('Distância entre o topo da seção e o topo da página em porcentagem:', sectionTopPercentage);

  //Home = 0 
  //Foto = 199
  //Depoimento = 389 
  //Sobre Nós = 560 

  if (sectionTopPercentage >= 0) {
    const telas = maeparTelas();
    telas[0].style.opacity = 1;
    telas[1].style.opacity = 0.3;
    telas[2].style.opacity = 0.3;
    telas[3].style.opacity = 0.3;
    telaAtual.textContent = 'home';
  }

  if (sectionTopPercentage >= 199) {
    const telas = maeparTelas();
    telas[1].style.opacity = 1;
    telas[0].style.opacity = 0.3;
    telas[2].style.opacity = 0.3;
    telas[3].style.opacity = 0.3;
    telaAtual.textContent = 'fotos';
  }

  if (sectionTopPercentage >= 389) {
    const telas = maeparTelas();
    telas[2].style.opacity = 1;
    telas[0].style.opacity = 0.3;
    telas[1].style.opacity = 0.3;
    telas[3].style.opacity = 0.3;
    telaAtual.textContent = 'depoimentos';
  }

  if (sectionTopPercentage >= 560) {
    const telas = maeparTelas();
    telas[3].style.opacity = 1;
    telas[0].style.opacity = 0.3;
    telas[1].style.opacity = 0.3;
    telas[2].style.opacity = 0.3;
    telaAtual.textContent = 'Sobre Nós';
  }

}

setInterval(calculasessaoatual, 1000);