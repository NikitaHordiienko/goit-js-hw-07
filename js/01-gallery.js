import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryItemsListEl = galleryItems.map(el => {
    const galleryItemEl = document.createElement('div');
    galleryItemEl.classList.add('gallery__item');

    const galleryLinkEl = document.createElement('a');
    galleryLinkEl.classList.add('gallery__link');
    galleryLinkEl.href = el.original;

    const galleryImageEl = document.createElement('img');
    galleryImageEl.classList.add('gallery__image');
    galleryImageEl.src = el.preview;
    galleryImageEl.setAttribute('data-source', el.original)
    galleryImageEl.alt = el.description;

    galleryItemEl.append(galleryLinkEl);
    galleryLinkEl.append(galleryImageEl);
    

    return galleryItemEl;
})

galleryEl.append(...galleryItemsListEl);
console.log(galleryEl);

galleryEl.addEventListener('click', event => {
    event.preventDefault();

    const { target } = event;
    
    if (target.nodeName !== 'IMG') {
        return;
    };

    const instance = basicLightbox.create(`<img src="${target.dataset.source}">`, {
        onShow: () => window.addEventListener('keydown', OnEscBtnPress),
        onClose: () => window.removeEventListener('keydown', OnEscBtnPress)
    });

    function OnEscBtnPress(event) {
        console.log(event.code);
        if (event.code === 'Escape') {
            instance.close()
        };
    };

    instance.show();  
});
