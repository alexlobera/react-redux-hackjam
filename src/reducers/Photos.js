import { RECEIVE_PHOTOS } from '../actions/Photos';

const photos = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PHOTOS:
      return action.photos
    default:
      return state
  }
}

export default photos