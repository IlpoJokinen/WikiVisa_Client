import React from 'react'
 
const GameButton = (props) => {
    let { id, title, onClickFunc } = props
    return <button id={id} onClick={onClickFunc} className={props.hasOwnProperty("className") ? props.className: "gameButton"}>{ title }</button>
}
 
export default GameButton