const fetchPhotos = (page = 1) => {
  return fetch(`http://jsonplaceholder.typicode.com/photos?_page=${page}`, {
    method: 'get'
  });
}

export default fetchPhotos;
