import React from 'react'
import { ListItem, ListItemIcon, ListItemText, Badge } from '@material-ui/core/'
import { Face } from '@material-ui/icons/'

const RoundEndPlayer = ({ gamertag, isCurrentPlayer, rank, pointsAdded, points }) => {

    return <ListItem divider >
        <ListItemIcon >
            <Face style={{display: isCurrentPlayer ? "" : "none"}}/>
        </ListItemIcon>
        <ListItemText primary={gamertag}/>
        <ListItemText style={{textAlign: "center"}} primary={points}/>
        <ListItemText style={{textAlign:"right"}} primary={`${pointsAdded >= 0 ? "+" : " "}${pointsAdded} points`}/>
    </ListItem>
}
export default RoundEndPlayer