import { galleryItems } from './gallery-items.js';
import SimpleLightBox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');

const imagesMarkup = createImagesMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', imagesMarkup);

function createImagesMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
  </a></li>`;
    })
    .join('');
}

const lightbox = new SimpleLightBox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
