import React from 'react'
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, Chip, Avatar } from '@material-ui/core/'
import { PlayCircleOutlineRounded, Person } from '@material-ui/icons/'

const GameList = ({ games, joinGame }) => {
    return <List className="gameList">
    {
        games.length ? 
            games.map((game, i) => {
                return <ListItem key={i} dense button divider>
                    <ListItemText 
                        component="div"
                        primary={<Typography>Room {game.roomCode}</Typography>} 
                        secondary={<Typography component={'span'}>
                            <Chip 
                                component="span"
                                icon={<Person />} 
                                size="small"
                                label={game.currentPlayers + " | " + game.maxPlayers }
                                style={{marginRight: 5}} 
                            /> 
                            <Chip 
                                component="span"
                                avatar={<Avatar>C</Avatar>}
                                size="small"
                                label={game.categories.join(", ")}
                            />
                        </Typography>} 
                    />  
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Join Game" onClick={() => joinGame(game.roomCode)}>
                            <PlayCircleOutlineRounded />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            })
        : <ListItem key={0} dense>
            <ListItemText 
                primary={<Typography>No Games Found</Typography>} 
            />
        </ListItem>
    }
</List>
}

export default GameList