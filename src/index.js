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
    width: 300,
    height: 300,
  });
}

function component() {
  const element = document.createElement("div");
  element.append(...[image1, image2, image3].map(placeholderImageComponent));
  return element;
}

// @ts-ignore
document.getElementById("content").appendChild(component());
