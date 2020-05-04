import React, { useState } from 'react'
import { Container, TextField, Grid, Slider, Button, makeStyles } from '@material-ui/core/'
import { ChevronRight, Search, HighlightOff } from '@material-ui/icons/'
import CategoryList from '../../components/UI/CategoryList'
import GameList from './components/GameList'
import BlueDivider from '../../components/UI/BlueDivider'
import Header from '../../components/UI/Header'

const FindGame = ({ joinGame, setView, setRoomCode }) => {
    const [maximumQuestionCount, setMaximumQuestionCount] = useState(5)
    const [selectedCategories, setSelectedCategories] = useState([])
    const [games, setGames] = useState([
        {roomCode: '6b2', currentPlayers: 5, maxPlayers: 6},
        {roomCode: '6b2', currentPlayers: 4, maxPlayers: 5},
        {roomCode: '6b2', currentPlayers: 3, maxPlayers: 4},
        {roomCode: '6b2', currentPlayers: 1, maxPlayers: 2},
        {roomCode: '6b2', currentPlayers: 1, maxPlayers: 4}
    ])
    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1)
        }
    }))
    const classes = useStyles()
    return <Grid container>
        <BlueDivider>Join By Room Code</BlueDivider>
        <Grid xs={12} item>
            <Container>
                <Grid container spacing={2}>
                    <Grid xs={12} item>
                        <Header size={3}>Type a Room Code</Header>
                    </Grid>
                    <Grid xs={12} item>
                        <TextField id="roomCodeTextField" onChange={e => setRoomCode(e.target.value)} fullWidth label="Type a Room Code" variant="outlined"/>
                    </Grid>
                    <Grid xs={12} item>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() => joinGame()}
                            startIcon={<ChevronRight />}
                        >Join Game</Button>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
        <BlueDivider>Search a Game</BlueDivider>
        <Grid xs={12} item>
            <Grid container spacing={4}>
                <Grid xs={12} item>
                    <Container>
                        <Grid container spacing={4}>
                            <Grid xs={12} sm={7} item>
                                <Grid container spacing={4}>
                                    <Grid xs={12} item>
                                        <Header size={3}>Categories in a Game</Header>
                                    </Grid>
                                    <Grid xs={12} item>
                                        <CategoryList 
                                            selectedCategories={selectedCategories} 
                                            setSelectedCategories={setSelectedCategories} 
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid xs={12} sm={5} item>
                                <Grid container spacing={4}>
                                    <Grid xs={12} item>
                                        <Header size={3}>Maximum Count of Questions</Header>
                                    </Grid>
                                    <Grid xs={12} item>
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
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
                <Grid xs={12} item>
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    onClick={() => joinGame()}
                                    startIcon={<Search />}
                                >Find Games</Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    onClick={() => joinGame()}
                                    startIcon={<HighlightOff />}
                                >Reset Filters</Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
                <Grid xs={12} item>
                    <Container>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <GameList games={games} />
                            </Grid>
                        </Grid>
                    </Container>
                </Grid> 
            </Grid>
        </Grid>
    </Grid>
}

export default FindGame