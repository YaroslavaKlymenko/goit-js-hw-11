import axios from 'axios';
import Notiflix from 'notiflix';

const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 40;

async function searchImages(query, page) {
  const params = {
    key: '35867918-4e3839490958f79a97499fa36',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: PER_PAGE,
  };

  try {
    const response = await axios.get(`${BASE_URL}?`, { params });
    const totalHits = response.data.totalHits;
    const hits = response.data.hits;
    return { totalHits, hits };
  } catch (error) {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    console.error(error);
    return null;
  }
}

export { searchImages };