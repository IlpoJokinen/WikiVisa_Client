import React from 'react'
import { ListItem, ListItemIcon, ListItemText, Badge } from '@material-ui/core/'
import { Face } from '@material-ui/icons/'

const RoundEndPlayer = ({ gamertag, isCurrentPlayer, rank, pointsAdded, points }) => {

    return <ListItem divider>
        
        {
            isCurrentPlayer ? <ListItemIcon>
                <Face/>
            </ListItemIcon>
            : <ListItemText primary={rank} />
        }
        <ListItemText primary={gamertag} style={{paddingRight: 5}}/>
        <ListItemText primary={points}/>
        <ListItemText primary={`${pointsAdded >= 0 ? "+" : " "}${pointsAdded} points`}/>
    </ListItem>
}
export default RoundEndPlayer