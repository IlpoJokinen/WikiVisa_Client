import React, { useState } from 'react'
import { Container, Box, TextField, Grid, Slider, Button, makeStyles, Backdrop } from '@material-ui/core/'
import CircularProgress from '@material-ui/core/CircularProgress'
import { ChevronRight, Search, HighlightOff } from '@material-ui/icons/'
import CategoryList from '../../components/UI/CategoryList'
import GameList from './components/GameList'
import BlueDivider from '../../components/UI/BlueDivider'
import Header from '../../components/UI/Header'

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }
}))

document.title = 'Find Game'

const FindGame = ({ joinGame, loadingState, fetchGames, games, setRoomCode }) => {
    const [maximumQuestionCount, setMaximumQuestionCount] = useState(30)
    const [selectedCategories, setSelectedCategories] = useState([])
    const classes = useStyles()
    function resetFilters() {
        setMaximumQuestionCount(30)
        setSelectedCategories([])
    }
    return <Container maxWidth={false} disableGutters>
        <BlueDivider>Join By Room Code</BlueDivider>
        <Box m={2}>
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
        </Box>
        <BlueDivider>Search a Game</BlueDivider>
        <Box m={2}>
            <Grid container spacing={4}>
                <Grid xs={12} sm={7} item>
                    <Grid container spacing={2}>
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
                    <Grid container spacing={2}>
                        <Grid xs={12} item>
                            <Header size={3}>Maximum Count of Questions: {maximumQuestionCount}</Header>
                        </Grid>
                        <Grid xs={12} item>
                            <Container style={{paddingLeft: 0}}>
                                <Slider
                                    value={maximumQuestionCount}
                                    onChange={(e, value) => setMaximumQuestionCount(value)}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks
                                    min={1}
                                    max={30}
                                />
                            </Container>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        <Box m={2}>
            <Grid container spacing={2}>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={() => fetchGames({
                            maximumQuestionCount: maximumQuestionCount,
                            selectedCategories: selectedCategories
                        })}
                        startIcon={<Search />}
                    >Find Games</Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={() => resetFilters()}
                        startIcon={<HighlightOff />}
                    >Reset Filters</Button>
                </Grid>
            </Grid>
            
            
        </Box>
        <Box m={2}>
            { games.length ? <GameList games={games} joinGame={joinGame} /> : '' }
        </Box>
        <Backdrop className={classes.backdrop} open={loadingState}>
            <CircularProgress color="inherit" />
        </Backdrop>
    </Container>
}

export default FindGame