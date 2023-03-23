import React from 'react';



function PictureCard(props) {
  
  return (
      <div>
        <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
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
