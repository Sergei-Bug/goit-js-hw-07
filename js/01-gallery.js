import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const wrapperGallary = document.querySelector(".gallery");

// create mark up
const galleryCreateMarkUp = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="large-image.img">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>`;
  })
  .join("");

//   add mark up

wrapperGallary.insertAdjacentHTML("beforeend", galleryCreateMarkUp);

wrapperGallary.addEventListener("click", onElGalleryClick);

function onElGalleryClick(ev) {
  ev.preventDefault();
  if (ev.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${ev.target.dataset.source}" wight="800" height="600">`);
  instance.show();

  document.addEventListener(
    "keydown",
    (ev) => {
      if (ev.code === "Escape") {
        instance.close();
      }
    },
    { once: true }
  );
}
