import React from 'react';
import {DndContext} from '@dnd-kit/core';

import {Draggable} from './Draggable';
import {Droppable} from './Droppable';

function App() {
  return (
    <DndContext>
      <Draggable />
      <Droppable />
    </DndContext>
  )
}