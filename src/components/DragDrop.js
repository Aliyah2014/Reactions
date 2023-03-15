import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import Picture from './Pictures';

const ImageList = [
  // use this data fo testing app
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    }
];

function DragDrop() {

const [board, setBoard] = useState([]);

const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
}));

const addToBoard = (id) => {
  console.log(id);
    const imageList = ImageList.filter((picture) => id === picture.id);
    //multiple images within the one div
    setBoard((board) => [...board, imageList[0]]); 
};

  return (
    <>
      <div className="Pictures"> {ImageList.map((picture) => {
        return <Picture url={picture.url} id={picture.id} />;
      })}</div>
      <div className="Board" ref={drop}>
        {board.map((picture) => {
        return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
    </>
  )
}

export default DragDrop;
