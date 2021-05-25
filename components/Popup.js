import React from 'react'
import "./Popup.css"
function Popup(props) {
    const restartHandle = () => {
      props.setIsEnable(false)
      props.setIsWinner(false)
      props.setWinner('_')
    }
    return props.trigger ?  (
        <div className="popup">
            <div className="popup-inner">
                <div className="infor">
                    <h1>Player {props.winner} win</h1>
                    <h3> with {props.steps} steps</h3>
                </div>
                <button className="restart-btn" onClick={restartHandle} >Restart</button>
                {props.children}
                </div>
        </div>
    ) : ""
}

export default Popup
