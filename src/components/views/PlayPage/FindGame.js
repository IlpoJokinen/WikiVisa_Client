import React, { useState } from 'react'
import { Container, TextField, Grid, Slider, List, ListItem, ListItemText, ListItemSecondaryAction, Typography, IconButton } from '@material-ui/core/'
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded'
import CategoryList from '../../UI/CategoryList'
import GameButton from '../../UI/GameButton'
import BlueDivider from '../../UI/BlueDivider'
import Header from '../../UI/Header'

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
                            <PlayCircleOutlineRoundedIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            })
        }
    </List>
}

const FindGame = ({ joinGame, setView }) => {
    const [maximumQuestionCount, setMaximumQuestionCount] = useState(5)
    const [selectedCategories, setSelectedCategories] = useState([])
    const [categories, setCategories] = useState([
        {prettyName: 'Category', id: 0},
        {prettyName: 'Category', id: 1},
        {prettyName: 'Category', id: 2},
        {prettyName: 'Category', id: 3},
        {prettyName: 'Category', id: 4},
        {prettyName: 'Category', id: 5},
        {prettyName: 'Category', id: 6}
    ])
    const [games, setGames] = useState([
        {roomCode: '6b2', currentPlayers: 5, maxPlayers: 6},
        {roomCode: '6b2', currentPlayers: 4, maxPlayers: 5},
        {roomCode: '6b2', currentPlayers: 3, maxPlayers: 4},
        {roomCode: '6b2', currentPlayers: 1, maxPlayers: 2},
        {roomCode: '6b2', currentPlayers: 1, maxPlayers: 4}
    ])
    return <Grid container style={{height: '100%'}}>
        <BlueDivider>Enter Room Name</BlueDivider>
        <Grid xs={12} item>
            <Container>
                <Grid container spacing={5}>
                    <Grid xs={12} sm={6} item>
                        <TextField id="roomCodeTextField" label="Type a Room Code" variant="outlined" />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <GameButton id="joinGameBtn" title="Join Game" onClickFunc={joinGame}/>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
        <BlueDivider>Search a Game</BlueDivider>
        <Grid xs={12} item>
            <Container>
                <Grid container spacing={5}>
                    <Grid xs={12} sm={6} item>
                        <Header size={3}>Categories in a Game</Header>
                        <CategoryList 
                            selectedCategories={selectedCategories} 
                            setSelectedCategories={setSelectedCategories} 
                            categories={categories} 
                        />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <Header size={3}>Maximum Count of Questions</Header>
                        <Slider
                            defaultValue={5}
                            onChange={(event, value) => setMaximumQuestionCount(value)}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={1}
                            max={30}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Grid>
        <Grid xs={12} item>
            <Container>
                <GameButton id="findGamesBtn" title="Find Games" />
            </Container>
        </Grid>
        <Grid xs={12} item>
            <Container>
                <Header size={3}>Found 3 games</Header>
                <GameList games={games} />
            </Container>
        </Grid>       
    </Grid>
}

export default FindGame