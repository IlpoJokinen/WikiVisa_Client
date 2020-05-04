import React from 'react'
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography } from '@material-ui/core/'
import { PlayCircleOutlineRounded } from '@material-ui/icons/'

const GameList = ({ games }) => {
    return <List className="gameList">
        {
            games.map((game, i) => {
                return <ListItem key={i} dense button divider>
                    <ListItemText 
                        primary={<Typography>Room {game.roomCode}</Typography>} 
                        secondary={<Typography>Players {game.currentPlayers}/{game.maxPlayers}</Typography>} 
                    />
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Join Game">
                            <PlayCircleOutlineRounded />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            })
        }
    </List>
}

export default GameList