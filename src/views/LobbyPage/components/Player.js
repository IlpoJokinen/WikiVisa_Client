import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core/'
import { Face, Done } from '@material-ui/icons/'

const Player = ({ gamertag, isCurrentPlayer, lobbyReady }) => {
    return <ListItem divider>
        { isCurrentPlayer ? 
            <ListItemIcon>
                <Face />
            </ListItemIcon> 
        : '' }
        <ListItemText 
            disableTypography={true}
            inset={!isCurrentPlayer} 
            primary={<span 
                style={{
                    margin: "0 20px 0 0",
                    paddingRight: 5,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: 'block'
                }}>
                {gamertag}
            </span>}
        />
        <ListItemIcon>
            <Done style={
                lobbyReady ? { color: "#2ECC40" } : { color: "#ccc", opacity: "0.5"} 
            }/>
        </ListItemIcon>
    </ListItem>
}

export default Player