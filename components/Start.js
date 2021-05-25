import React,{useState} from 'react'

function Start(props) {
  const [player1,setPlayer1]= useState("")
  const [player2,setPlayer2]= useState("")

  const enableGame = (e) => {
    e.preventDefault()
    if (player1 === "" || player2 === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    else {
      props.setPlayer_1(player1)
      props.setPlayer_2(player2)
      props.setIsEnable(true)
    }
    
  }

  const handleChange1 = (e) => {
    setPlayer1(e.target.value);
}
const handleChange2 = (e) => {
  setPlayer2(e.target.value);
}
  return (
    <div className="ui main">
      <h2>Tic Tac Toe</h2>
      <form className="ui form" onSubmit={enableGame}>
        <div className="field">
        <label className="lb">Player 1</label>
          <input
            type="text"
            name="player1"
            placeholder="Tên người chơi 1"
            value={player1}
            onChange={handleChange1}
          />
        </div>
        <div className="field">
        <label className="lb">Player 2</label>
          <input
            type="text"
            name="player2"
            placeholder="Tên người chơi 2"
            value={player2}
            onChange={handleChange2}
          />
        </div>
        <button className="ui button puprle">Play</button>
      </form>
    </div>
  );
}

export default Start