import React from "react";
import { closestCenter, DndContext, PointerSensor, useSensor} from "@dnd-kit/core";
import { useState } from "react";

import NavBar from "./components/navbar1";
import Draggable from "./components/Draggable";
import Droppable from "./components/Droppable";
// import Picture from "./components/Pictures";
import "./components/DragDrop.css";


function App() {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = (
    <Draggable>Drag me</Draggable>
  );

  const sensors = useSensor(PointerSensor);

  return (
    <DndContext
    onDragEnd={handleDragEnd}
    collisionDetection={closestCenter}
    >
      {!isDropped ? draggableMarkup : null}

<NavBar />
      <Droppable className="Board">
        {isDropped ? draggableMarkup : 'Drop here'}
      </Droppable>
    </DndContext>
  );
  
  function handleDragEnd(event) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);

    }
  }
}

export default App;
