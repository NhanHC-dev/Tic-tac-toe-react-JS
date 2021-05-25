import React, { useState } from "react";
import "./Board.css";
import Square from "./Square";

export default function Board({
  currentPlayer,
  setCurrentPlayer,
  check,
  onNewMove
}) {
  const chars = [" ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const initMatrix = [];
  for (let i = 0; i < 10; i++) {
    initMatrix[i] = [];
    for (let j = 0; j < 10; j++) initMatrix[i][j] = "_";
  }

  const [matrix, setMatrix] = useState(initMatrix);

  const onClickSquare = (r, c) => {
    let temp = matrix;
    if (temp[r][c] === "X" || temp[r][c] === "O") return;
    temp[r][c] = currentPlayer;
    setMatrix(temp);
    check(temp, r, c);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    onNewMove(r, c);
  };

  return (
    <div className="board">
      <div className="char">
        {chars.map((el) => (
          <span className="item">{el}</span>
        ))}
      </div>
      <div className="under">
        <div className="nums">
          {nums.map((el) => (
            <span className="item">{el}</span>
          ))}
        </div>
        <div className="playarea">
          {matrix.map((row, r) =>
            row.map((e, c) => (
              <Square onClick={() => onClickSquare(r, c)}>{e}</Square>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
