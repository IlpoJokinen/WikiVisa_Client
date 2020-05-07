import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core/'
import { Face } from '@material-ui/icons/'

const RoundEndPlayer = ({ gamertag, isCurrentPlayer, rank, pointsAdded, points,  }) => {
    return <ListItem divider>
        <ListItemText primary={rank} />
        {
            isCurrentPlayer ? <ListItemIcon>
                <Face />
            </ListItemIcon>
            : ''
        }
        <ListItemText primary={gamertag} />
        <ListItemText primary={points}/>
        <ListItemText primary={`${pointsAdded >= 0 ? "+" : " "} ${pointsAdded} points`}/>

    </ListItem>
}

export default RoundEndPlayer