import "./index.css";

// @ts-ignore
// spell-checker: disable-next-line
import image1 from "../assets/Gemini_Generated_Image_nceq59nceq59nceq.jpeg";
// @ts-ignore
// spell-checker: disable-next-line
import image2 from "../assets/Gemini_Generated_Image_oi2swyoi2swyoi2s.jpeg";
// @ts-ignore
// spell-checker: disable-next-line
import image3 from "../assets/Gemini_Generated_Image_oi2swzoi2swzoi2s.jpeg";
import { carouselComponent } from "./carousel/carousel.js";

const IMAGE_SIZE = {
  width: 300,
  height: 300,
};

function imageComponent({ src, alt, width, height, ...attributes }) {
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  image.width = width;
  image.height = height;
  Object.entries(attributes).forEach(([attribute, value]) => {
    image.setAttribute(attribute, value);
  });
  return image;
}

function placeholderImageComponent(imageSrc) {
  return imageComponent({
    src: imageSrc,
    alt: "placeholder stock image",
    width: IMAGE_SIZE.width,
    height: IMAGE_SIZE.height,
  });
}

function sampleCarouselSlidesComponent() {
  return carouselComponent({
    width: IMAGE_SIZE.width,
    height: IMAGE_SIZE.height,
    children: [image1, image2, image3].map(placeholderImageComponent),
  });
}

function component() {
  const { carousel, previous, next } = sampleCarouselSlidesComponent();

  const previousButton = document.createElement("button");
  previousButton.addEventListener("click", previous);
  previousButton.textContent = "Previous";

  const nextButton = document.createElement("button");
  nextButton.addEventListener("click", next);
  nextButton.textContent = "Next";

  const element = document.createElement("div");
  element.append(carousel, previousButton, nextButton);

  return element;
}

// @ts-ignore
document.getElementById("content").appendChild(component());
