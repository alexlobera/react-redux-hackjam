export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
//import fetchPhotos from '../api/Photos'

export const receivePhotos = (data) => (
  {
    type: RECEIVE_PHOTOS,
    photos: data.slice(0, 50)
  }
);

export const getPhotos = () => (
    fetchPhotos()
      .then(response => response.json())
      .then(receivePhotos)
      .catch(console.log)
)
