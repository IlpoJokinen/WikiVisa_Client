import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core/'
import { Face } from '@material-ui/icons/'

const RoundEndPlayer = ({ gamertag, isCurrentPlayer, rank, pointsAdded, points }) => {

    return <ListItem divider >
        <ListItemText primary={gamertag}/>
        <ListItemIcon >
            <Face style={{display: isCurrentPlayer ? "" : "none", textAlign:"center"}}/>
        </ListItemIcon>
        <ListItemText style={{textAlign:"left"}} primary={`${pointsAdded >= 0 ? "+" : " "}${pointsAdded} points`}/>
        <ListItemText style={{textAlign: "center", backgroundColor: "#c2d1c4", borderRadius: 16}} primary={points}/>
    </ListItem>
}
export default RoundEndPlayer