import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from './components/DragDrop';
import './App.css';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App">
    <DragDrop />
      <header className="App-header">
      </header>
    </div>
    </DndProvider>
  );
}

export default App;
