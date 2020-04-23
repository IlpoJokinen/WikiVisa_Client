import React from 'react'
 
const GameButton = ({ id, title, onClickFunc }) => {
    return <button id={id} onClick={onClickFunc} className="gameButton">{ title }</button>
}
 
export default GameButton