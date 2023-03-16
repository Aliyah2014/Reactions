import React from 'react'
import CorkImage from '../brand/cork-background.jpg';

function MainBoard() {
  return (
    <div className="CorkBoard" 
    style={{ backgroundImage:`url(${CorkImage})`, 
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover" }}>
      
    </div>
  )
}

export default MainBoard;
