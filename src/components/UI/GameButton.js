import React from 'react'
 
const GameButton = ({ id, title }) => {
    return <button id={id} className="gameButton">{ title }</button>
}
 
export default GameButton