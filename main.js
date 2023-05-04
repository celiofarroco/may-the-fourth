function createCarousel(carouselEl) {
  const carouselInner = carouselEl.querySelector(".carousel-inner");
  const carouselItems = carouselEl.querySelectorAll(".carousel-item");
  const carouselPrev = carouselEl.querySelector(".carousel-prev");
  const carouselNext = carouselEl.querySelector(".carousel-next");

  let currentIndex = 0;
  const gap = 40; // valor do espaçamento entre os itens
  let itemWidth = carouselItems[0].offsetWidth + gap; // inclui o espaçamento
  let visibleItems = Math.floor(carouselEl.clientWidth / itemWidth);
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
}

// Use a função para criar cada carrossel individual
const carousel1 = document.querySelector("#carousel3");
createCarousel(carousel3);

const carousel2 = document.querySelector("#carousel4");
createCarousel(carousel4);
