import React from 'react'
import { List } from '@material-ui/core'
import RoundEndPlayer from './RoundEndPlayer'

const RoundEndPlayerList = ({ players, gamertag }) => {
    
    return <List>
        {
            players
            .sort((a, b) => b.points - a.points)
            .map((player, i) => <RoundEndPlayer 
                key={i}
                rank={i + 1} 
                isCurrentPlayer={gamertag === player.gamertag} 
                points={player.points} 
                pointsAdded={player.pointsAdded} 
                gamertag={player.gamertag}/>
            )    
        }
    </List>
}

export default RoundEndPlayerList