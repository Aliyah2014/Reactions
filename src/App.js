import React from "react";
import { DndContext } from "@dnd-kit/core";
import { useState } from "react";

import NavBar from "./components/navbar1";
import Draggable from "./components/Draggable";
import Droppable from "./components/Droppable";

function App() {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = <Draggable>Drag Me</Draggable>;

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!isDropped ? draggableMarkup : null}
      <NavBar />
      <Droppable>{!isDropped ? draggableMarkup : "Drop Here"}</Droppable>
    </DndContext>
  );

  function handleDragEnd(event) {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  }
}

export default App;
