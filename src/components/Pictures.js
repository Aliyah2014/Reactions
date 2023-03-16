import React from 'react';
import { useDrag } from 'react-dnd';


function Pictures({id, url}) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: {id: id},
    collect: (monitor) =>({
      isDragging: !!monitor.isDragging(),
  }),
 }));
 return <img 
 ref={drag}
 src={url} 
 width="150px" alt="" 
 style={{border: isDragging ? "1px solid grey" : "0px" }}/>;
}

export default Pictures;
