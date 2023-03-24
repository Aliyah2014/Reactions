import React from 'react';

function PictureCard(props) {
  return (
      <div>
        <div>
          <img 
            src={props.image.urls.thumb}
            alt={props.image.alt}
          />
        </div>
      </div>
  );

};

export default PictureCard;
