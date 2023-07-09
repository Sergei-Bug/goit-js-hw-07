import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const wrapperGallary = document.querySelector(".gallery");

// create mark up
const galleryCreateMarkUp = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
        </a>
    </li>`;
  })
  .join("");

//   add mark up

wrapperGallary.insertAdjacentHTML("beforeend", galleryCreateMarkUp);

wrapperGallary.addEventListener("click", onGalleryItemClick);

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function onGalleryItemClick(ev) {
  ev.preventDefault();

  if (ev.target.nodeName !== "IMG") {
    return;
  }
}
