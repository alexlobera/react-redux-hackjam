import React from "react";
import { Link } from 'react-router';

const PhotoList = (props) => (
    <div>
      <h1>Photos</h1>
      <Link to={'/comments/'}>See comments</Link>
      <hr />
      {
          props.photos.map(photo => (
              <img src={photo.thumbnailUrl} key={photo.id}/>
          ))
      }
      <hr />
      <button>Next page</button> <button>Previous page</button>
    </div>
)

export default PhotoList;
