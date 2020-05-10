import React from 'react'
import { List } from '@material-ui/core'
import GameEndPlayer from './GameEndPlayer'


const GameEndPlayerList = ({ players, gamertag }) => {
    
    return <List>
        {
            players
            .sort((a, b) => b.points - a.points)
            .slice(3)
            .map((player, i) => <GameEndPlayer 
                key={i}
                rank={i + 4} 
                isCurrentPlayer={gamertag === player.gamertag} 
                points={player.points} 
                gamertag={player.gamertag}/>
            )    
        }
    </List>
}

export default GameEndPlayerList