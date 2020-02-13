import React, { useState, useEffect } from 'react'
import Player from './Player'

const StartGame = ({ players }) => {
    const [timer, setTimer] = useState(20)

    useEffect(() => {
        setTimeout(() => {
            if(timer > 0){
                setTimer(timer - 1)
            }
            if(timer === 0) {
                window.location.href="/question"
            }
        }, 1000)
        
    }, [timer])

    const allPlayers = players.map(player => {
        return (
            <div key={player.id}>
                <Player gamertag={player.gamertag}/>
            </div>
        )
    })

    return (
        <div>   
            <h3>Players in the game room</h3>
            {allPlayers}
            <h3>You have entered the room X</h3>
            <h6>The game will start in <b>{timer}</b> seconds</h6>
        </div>
    )
}

export default StartGame
