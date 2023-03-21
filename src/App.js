import React from "react";
import { DndContext } from "@dnd-kit/core";
import { useState } from "react";

import NavBar from "./components/navbar1";
import Draggable from "./components/Draggable";
import Droppable from "./components/Droppable";
import Picture from "./components/Pictures";
import "./components/DragDrop.css";

function App() {

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
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = <Draggable>Drag Me</Draggable>;

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!isDropped ? draggableMarkup : null}
      <NavBar />
      <Droppable>{!isDropped ? draggableMarkup : "Drop Here"}</Droppable>
      <div className="Pictures">
        {" "}
        {ImageList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
      <div className="Board" ref={drop}>
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
    </DndContext>
  );


  function handleDragEnd(event) {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  }
}

export default App;
