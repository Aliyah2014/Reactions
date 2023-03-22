import React from "react";
import { closestCenter, DndContext, PointerSensor, useSensor} from "@dnd-kit/core";
import { useState } from "react";

import NavBar from "./components/navbar1";
import Draggable from "./components/Draggable";
import Droppable from "./components/Droppable";
// import Picture from "./components/Pictures";
import "./components/DragDrop.css";
import SearchBox from "./components/SearchBox";


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
<SearchBox />
      <Droppable className="Board">
        {isDropped ? draggableMarkup : null}
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
