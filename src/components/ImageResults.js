import React from 'react';
import PictureCard from './PictureCard';

function ImageResults(props) {
  const images = props.photList.map((image) => {
    return <PictureCard image={image} key={image.id}/>
  });

  return (
    <div className="ResultsContainer">
        {images}
    </div>
  )
}

export default ImageResults;