import React, { useState } from 'react'
import './App.css'
import Board from './components/Board'
import CurrentPlayer from './components/CurrentPlayer'
import MoveReCord from './components/MoveReCord'
import Start from './components/Start'
import Popup from './components/Popup'

export default function App() {

  const [currentPlayer, setCurrentPlayer] = useState('O')
  const [winner, setWinner] = useState('_')
  const [moveRecord, setMoveRecord] = useState(0)
  const [player1, setPlayer1] = useState("")
  const [player2, setPlayer2] = useState("")
  const [isEnable, setIsEnable] = useState(false)
  const [isWinner, setIsWinner] = useState(false)
  //const [history,setHistory] = useState("");
  const check = (matrix, r, c) => {
    let s1, s2, s3, s4;
    s1 = s2 = ''

    for (let i = 0; i < 10; i++) {
      s1 += matrix[i][c]
      s2 += matrix[r][i]
    }

    let k = 1;
    s3 = s4 = matrix[r][c]
    while (1) {
      let flag = 0;
      if (r - k >= 0 && c + k < 10) s3 += matrix[r - k][c + k]; else flag++;
      if (r + k < 10 && c - k >= 0) s3 = matrix[r + k][c - k] + s3; else flag++;

      if (r + k < 10 && c + k < 10) s4 += matrix[r + k][c + k]; else flag++;
      if (r - k >= 0 && c - k >= 0) s4 = matrix[r - k][c - k] + s4; else flag++;

      k++;
      if (flag === 4) break
    }

    let s = `${s1} ${s2} ${s3} ${s4}`
    if (s.includes('X'.repeat(5))) {
      setWinner(player1)
      setIsWinner(true)
    }
    if (s.includes('O'.repeat(5))) {
      setWinner(player2)
      setIsWinner(true)
    }
  }
  const setPlayer_1 = (player) => {
    setPlayer1(player)
  }
  const setPlayer_2 = (player) => {
    setPlayer2(player)
  }
  return isEnable ?
    (
      <>
        <div className="container">
          <CurrentPlayer player={currentPlayer} playerNameA={player1} playerNameB={player2} />
          <Board
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
            check={check}
            moveRecord={moveRecord}
            setMoveRecord={setMoveRecord}
            //history={}
          />
          <MoveReCord moveRecord={moveRecord}  />
          {isWinner ? <Popup trigger={true}
            steps={moveRecord}
            winner={winner}
            setIsEnable={setIsEnable}
            setIsWinner={setIsWinner}
            setWinner={setWinner}
             />
           : ""}
        </div>

      </>
    )
    : (<Start setPlayer_1={setPlayer_1} setPlayer_2={setPlayer_2} setIsEnable={setIsEnable} />)
}
