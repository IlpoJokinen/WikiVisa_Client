import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core/'
import { Face, Done } from '@material-ui/icons/'

const Player = ({ gamertag, isCurrentPlayer, lobbyReady }) => {
    return <ListItem divider>
        <ListItemText primary={gamertag} />
        <ListItemIcon>
            <Face style={{display: isCurrentPlayer ? "" : "none"}}/>
        </ListItemIcon>
        <ListItemIcon>
                <Done color={"primary"} style={{display: lobbyReady ? "" : "none"}}/>
            </ListItemIcon>
    </ListItem>
}

export default Player