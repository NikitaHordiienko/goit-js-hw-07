import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryItemsListEl = galleryItems.map(el => {
    const galleryLinkEl = document.createElement('a');
    galleryLinkEl.classList.add('gallery__link');
    galleryLinkEl.href = el.original;

    const galleryImageEl = document.createElement('img');
    galleryImageEl.classList.add('gallery__image');
    galleryImageEl.src = el.preview;
    galleryImageEl.alt = el.description;

    galleryLinkEl.append(galleryImageEl);    

    return  galleryLinkEl;
})

galleryEl.append(...galleryItemsListEl);
console.log(galleryEl);

const lightBox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
})