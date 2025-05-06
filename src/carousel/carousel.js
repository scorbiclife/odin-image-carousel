import "./carousel.css";

export function carouselComponent({ children, width, height }) {
  const carouselInnerPart = document.createElement("div");
  carouselInnerPart.classList.add("carousel-inner");
  carouselInnerPart.append(...children);

  const carousel = document.createElement("div");
  carousel.classList.add("carousel");
  carousel.style.width = `${width}px`;
  carousel.style.height = `${height}px`;

  carousel.append(carouselInnerPart);

  let i = 0;
  const iMax = children.length;

  function setInnerPartPositionTo(i) {
    carouselInnerPart.style.left = `-${i * width}px`;
  }

  function next() {
    i = (i + 1) % iMax;
    setInnerPartPositionTo(i);
  }

  function previous() {
    i = (i + iMax - 1) % iMax;
    setInnerPartPositionTo(i);
  }

  return {
    carousel,
    next,
    previous,
  };
}
