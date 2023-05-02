export const gallery = document.querySelector('div.gallery');
export function renderImages(hits) {
  const markup = hits.map(item => {
    return `<div class="photo-card">
      <div class="thumb"><img class="gallery__image" src="${item.webformatURL}" alt="${item.tags}" loading="lazy" /></div>
      <div class="info">
      <ul class="gallery__item">
      <li class="gallery__link">
        <p class="info-item">
          <b>Likes </b><span>${item.likes}</span>
        </p>
        <p class="info-item">
          <b>Views </b><span>${item.views}</span>
        </p>
        <p class="info-item">
          <b>Comments </b><span>${item.comments}</span>
        </p>
        <p class="info-item">
          <b>Downloads </b><span>${item.downloads}</span>
        </p>
        </li>
        </ul>
      </div>
    </div>`;
  });
  gallery.insertAdjacentHTML('beforeend', markup.join(''));
}