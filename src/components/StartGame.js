import React from 'react'
import Player from './Player'

const StartGame = ({ players }) => {
    const buttonStyle = {
        marginTop: 10,
        marginRight: "auto",
        marginLeft: "auto",
        display: "block",
    }

    const allPlayers = players.map(player => {
        return (
            <div key={player.id}>
                <Player gamertag={player.gamertag}/>
            </div>
        )
    })

    return (
        <div>   
            <h3>Plyers in the game room</h3>
            {allPlayers}
            <h3>Enter room</h3>
            <form>
                <input type="text" placeholder="Your gamertag"></input>
                <input style={buttonStyle} type="submit" value="Enter game"></input>
            </form>
        </div>
    )
}

export default StartGame
