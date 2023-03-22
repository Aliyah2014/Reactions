import React from "react";
import { closestCenter, DndContext, PointerSensor, useSensor} from "@dnd-kit/core";
import { useState } from "react";

import NavBar from "./components/navbar1";
import Draggable from "./components/Draggable";
import Droppable from "./components/Droppable";
// import Picture from "./components/Pictures";
import "./components/DragDrop.css";
import SearchBox from "./components/SearchBox";
// import Images from "./components/Images";
// import useAxios from "./hooks/useAxios";
import { createContext } from "react";


export const ImageContext = createContext();

function App() {
  const [isDropped, setIsDropped] = useState(false);
  // const { response, isLoading, error, fetchData } = useAxios('search/photos?page=1&5-Total&query=office&client_id=${process.env.REACT_APP_ACCESS_KEY}');
  // console.log(response);
  const draggableMarkup = (
    <Draggable
    >Drag me</Draggable>
  );

  const sensors = useSensor(PointerSensor);
  // const value = {
  //   response,
  //   isLoading,
  //   error,
  //   fetchData
  // }

  return (
    <DndContext
    onDragEnd={handleDragEnd}
    collisionDetection={closestCenter}
    >
      {!isDropped ? draggableMarkup : null}

<NavBar />
<SearchBox />
{/* <ImageContext.Provider value={value}> */}
      <Droppable className="Board">
        {isDropped ? draggableMarkup : null}
      </Droppable>
      {/* <Images></Images> */}
      {/* </ImageContext.Provider> */}
    </DndContext>
  );
  
  function handleDragEnd(event) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);

    }
  }
}

export default App;
