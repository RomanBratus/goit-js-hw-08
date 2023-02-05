// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery");
const renderGalleryItems = (pictures) =>
  pictures.reduce(
    (acc, picture) =>
      acc +
      `<a class="gallery__item" href=${picture.original}>
      <img class="gallery__image" src=${picture.preview} alt=${picture.description} />
    </a>
    `,
    ""
  );

const insertGalleryItems = (string) => {

  gallery.insertAdjacentHTML("beforeend", string);
};
insertGalleryItems(renderGalleryItems(galleryItems));

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  scrollZoom: false,
});

console.log(galleryItems);
