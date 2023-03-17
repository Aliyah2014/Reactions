import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from './components/DragDrop';
// import NavBar from './components/NavBar';
import './App.css';
import React from 'react';
import NavBar from './components/navbar1';


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App">
    <NavBar />
      <DragDrop />
        <header className="App-header">
        
        </header>
    </div>
    </DndProvider>
  );
}

export default App;
