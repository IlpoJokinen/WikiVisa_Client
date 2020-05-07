import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core/'
import { Face, Done } from '@material-ui/icons/'

const Player = ({ gamertag, isCurrentPlayer, lobbyReady }) => {
    return <ListItem divider>
        <ListItemIcon>
            <Face style={{display: isCurrentPlayer ? "" : "none"}}/>
        </ListItemIcon>
        <ListItemText primary={gamertag} />
        {
            lobbyReady ? <ListItemIcon>
                <Done color={"primary"}/>
            </ListItemIcon>
            : ''
        }
    </ListItem>
}

export default Player