// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const listImgs = document.querySelector('.gallery');

const getImgs = arr => {
  return arr
    .map(
      ({ original: orig, preview: prev, description: descr }) =>
        `<li class="gallery__item">
                <a class="gallery__link" href="${orig}">
                    <img class="gallery__image" src="${prev}" alt="${descr}">
                </a>
        </li>`
    )
    .join('');
};

listImgs.insertAdjacentHTML('beforeend', getImgs(galleryItems));

const gallery = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionDelay: 250,
  captionsData: 'alt',
});

gallery.refresh();

console.log(galleryItems);
