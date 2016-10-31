import React from 'react';

const Photo = ({ photo }) => (
  <div>
    <div>{photo.title}</div>
    <img src={photo.thumbnailUrl} />
  </div>
);

export default Photo
