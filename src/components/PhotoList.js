import React from "react";
import { Link } from 'react-router';

const PhotoList = (props) => (
    <ul>
    {
        props.photos.map(photo => (
            <Link to={'/photos/' + photo.id} key={photo.id}>
                <img src={photo.thumbnailUrl} />
            </Link>
        ))
    }
    </ul>
)

export default PhotoList;
