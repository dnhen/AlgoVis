import { useState, useEffect } from 'react';
import Header from './components/Header';
import { updateGrid, handleClick, handleNavClick } from './Helpers';

const CELL_SIZE = 30;
const ROWS = Math.floor((window.innerHeight * 0.8) / CELL_SIZE);
const COLS = Math.floor((window.innerWidth * 0.9) / CELL_SIZE);

function App() {
  const [grid, setGrid] = useState([]);
  const [startCell, setStartCell] = useState([0, 0]);
  const [endCell, setEndCell] = useState([ROWS-1, COLS-1]);

  // This will run every time start and end cells are updated
  useEffect(() => {
    setGrid(updateGrid(ROWS, COLS, startCell, endCell));
  }, [startCell, endCell]);

  return (
    <div className="app">
      <Header onClick={handleNavClick} />
      {/* Display the grid */}
      <div className="grid">
        {grid.map((row, rowId) => {
          return (
            <div key={rowId} className="row">
              {row.map((cell, cellId) => {
                return <div key={cellId} className={cell.startCell ? 'cell start' : cell.endCell ? 'cell end' : 'cell'} onClick={() => handleClick(rowId, cellId, setStartCell, setEndCell)} />
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
