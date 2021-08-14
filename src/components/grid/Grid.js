import React, { useState } from "react";
import "./Grid.css";

function generateGid() {
  let grid = [];

  for (let i = 0; i < 9; i++) {
    grid.push(Array(9).fill(0));
  }

  return grid;
}

function Grid() {
  const [grid, setGrid] = useState(generateGid());

  function handleTileClick(x, y) {
    var clonedGrid = JSON.parse(JSON.stringify(grid));
    let value = grid[x][y];
    const newValue = value !== 9 ? value + 1 : 0;

    clonedGrid[x][y] = newValue;

    setGrid(clonedGrid);
  }

  return (
    <div className="GridContainer">
      {grid.map((row, x) => (
        <div className="Row">
          {row.map((tile, y) => (
            <div className="Tile" onClick={() => handleTileClick(x, y)}>
              {tile !== 0 ? tile : ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
