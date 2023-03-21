import React from 'react';
import {DndContext} from '@dnd-kit/core';

import {Draggable} from './Draggable';
import {Droppable} from './Droppable';

function App() {
    const [isDropped, setIsDropped] = useState(false);
    const draggableMarkup = (
        <Draggable>Drag Me</Draggable>
    )

  return (
    <DndContext onDragEnd={handleDragEnd}>
        {!isDropped ? draggableMarkup : null}
      <Droppable>
      {!isDropped ? draggableMarkup : 'Drop Here'}
      </Droppable>
    </DndContext>
  );

  function handleDragEnd(event) {
    if (event.over && event.over.id === 'droppable') {
        setIsDropped(true);
    }
  }
}