import React from 'react'
import '../../style.css'

const CircleTimer = (startGameCounter) => {
    if (startGameCounter === 0) {
      return <div className="timer">Too lale...</div>
    }
  
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{startGameCounter}</div>
        <div className="text">seconds</div>
      </div>
    )
  } 

export default CircleTimer