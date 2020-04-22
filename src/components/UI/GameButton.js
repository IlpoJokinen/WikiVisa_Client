import React from 'react'
 
const GameButton = ({ id, title }) => {
    return <button id={id} class="gameButton">{ title }</button>
}
 
export default GameButton