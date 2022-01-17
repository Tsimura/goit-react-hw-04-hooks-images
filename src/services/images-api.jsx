function fetchImages(nextRequestValue, currentPage) {
  const BASE_URL = 'https://pixabay.com/api';
  const API_KEY = process.env.REACT_APP_API_KEY;
  const FILTERS = 'image_type=photo&orientation=horizontal';
  return fetch(
    `${BASE_URL}/?q=${nextRequestValue}&page=${currentPage}&key=${API_KEY}&${FILTERS}&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`Error message with ${nextRequestValue} value!!!`),
    );
  });
}
const api = { fetchImages };
export default api;
