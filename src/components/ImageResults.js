import React from 'react'

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
