import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export function Draggable(props) {
  const { attributes, transition, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: "draggable",
  });
  const style = 
     {
        transform: CSS.Translate.toString(transform),
        transition: transition,
        opacity: isDragging? 0.5 : 1,
        pointerEvents: isDragging? "none" : "auto", 
      }
    

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );

  
}

export default Draggable;
