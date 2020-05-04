import React from 'react'
import { List } from '@material-ui/core'
import Player from './Player'

const PlayerList = ({ gamertag, players }) => {
    return <List>
        {
            players.map(player => <Player 
                key={player.id} 
                gamertag={player.gamertag} 
                isCurrentPlayer={gamertag === player.gamertag}
                lobbyReady={player.lobbyReady} 
            />)
        }
    </List>
}

export default PlayerList