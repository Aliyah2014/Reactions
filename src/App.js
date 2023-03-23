import React from "react";
import { closestCenter, DndContext, PointerSensor, useSensor} from "@dnd-kit/core";
import { useState } from "react";
import API from './utils/API';
import NavBar from "./components/navbar1";
import Draggable from "./components/Draggable";
import Droppable from "./components/Droppable";

import "./components/DragDrop.css";
import SearchBox from "./components/SearchBox";
import ImageResults from "./components/ImageResults";


function App() {

const [images, setImages] =useState([]);
// handle for event
const onFormSubmit = async (search) => {
  const response = await API.get("/search/photos", {
    params: {
      query: search
    }
  });

  setImages(response.data.results);
};

  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = (
    <Draggable><ImageResults photList={images} /></Draggable>
  );

  const sensors = useSensor(PointerSensor);

  return (
    <DndContext
    onDragEnd={handleDragEnd}
    collisionDetection={closestCenter}
    >
      {!isDropped ? draggableMarkup : null}

<NavBar />
<SearchBox onSubmit={onFormSubmit}/>
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
