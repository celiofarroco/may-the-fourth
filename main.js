const carousel = document.querySelector(".carousel");
const carouselInner = document.querySelector(".carousel-inner");
const carouselItems = document.querySelectorAll(".carousel-item");
const carouselPrev = document.querySelector(".carousel-prev");
const carouselNext = document.querySelector(".carousel-next");

let currentIndex = 0;
const gap = 40; // valor do espaçamento entre os itens
let itemWidth = carouselItems[0].offsetWidth + gap; // inclui o espaçamento
let visibleItems = Math.floor(carousel.clientWidth / itemWidth);
const totalItems = carouselItems.length;
let currentPosition = 0;

function slide(direction) {
  let newPosition;
  if (direction === "prev") {
    newPosition = currentPosition + itemWidth;
    if (newPosition > gap) {
      // adiciona gap ao limite superior
      newPosition = -(totalItems - visibleItems) * itemWidth - gap;
    }
  } else if (direction === "next") {
    newPosition = currentPosition - itemWidth;
    if (newPosition < -(totalItems - visibleItems) * itemWidth - gap) {
      // adiciona gap ao limite inferior
      newPosition = 0;
    }
  }
  currentPosition = newPosition;
  carouselInner.style.transform = `translateX(${currentPosition}px)`;
}

carouselPrev.addEventListener("click", function () {
  slide("prev");
});

carouselNext.addEventListener("click", function () {
  slide("next");
});
