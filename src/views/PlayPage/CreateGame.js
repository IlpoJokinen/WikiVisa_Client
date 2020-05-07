import React, { useState, useEffect } from 'react'
import { Grid, Box, TextField, Button, FormControlLabel, Switch, Container, Slider} from '@material-ui/core'
import { ChevronRight } from '@material-ui/icons/'
import CategoryList from '../../components/UI/CategoryList'
import Header from '../../components/UI/Header'
import BlueDivider from '../../components/UI/BlueDivider'

const blueText = {
    fontFamily: 'IBM Plex Sans',
    color: '#879DFA'
}

const CreateGame = ({createGame, setRoomCode, creatingState}) => {
    const [selectedCategories, setSelectedCategories] = useState([])
    const [gameProperties, setGameProperties] = useState({
        type: 'custom',
        question: {
            categories: [],
            count: 5
        },
        counters: {
            answer: 10,
            roundEnd: 10
        },
        visibility: false,
        losePoints: false,
        pointsForSpeed: false
    })
    useEffect(() => {
        setGameProperties({...gameProperties, question: {...gameProperties.question, categories: selectedCategories}})
    },[selectedCategories])
    return <Container maxWidth disableGutters>
        <BlueDivider textCenter>Setup your personal game</BlueDivider>
        <Box m={2}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Header size={4}>Enter Roomcode</Header>
                </Grid>
                <Grid item xs={12}>
                    <TextField label={'Type a Room Code'} variant="outlined" fullWidth onChange={e => setRoomCode(e.target.value)} />
                </Grid>
            </Grid>
        </Box>
        <Box m={2}>
            <Grid container spacing={4}>
                <Grid item sm={6} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}><Header size={4}>Basic Settings</Header></Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}><Header size={6}>Categories in a Game</Header></Grid>
                                <Grid item xs={12}>
                                    <CategoryList
                                        selectedCategories={selectedCategories} 
                                        setSelectedCategories={setSelectedCategories}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}><Header size={6}>Question Count: {gameProperties.question.count}</Header></Grid>
                                <Grid item xs={12}>
                                    <Slider
                                        value={gameProperties.question.count}
                                        onChange={(event, value) => setGameProperties({...gameProperties, question: {...gameProperties.question, count: value}})}
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
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}><Header size={6}>Answer Time: {gameProperties.counters.answer}</Header></Grid>
                                <Grid item xs={12}>
                                    <Slider
                                        value={gameProperties.counters.answer}
                                        onChange={(event, value) => setGameProperties({...gameProperties, counters: {...gameProperties.counters, answer: value }})}
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
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}><Header size={6}>Round End Time: {gameProperties.counters.roundEnd}</Header></Grid>
                                <Grid item xs={12}>
                                    <Slider
                                        value={gameProperties.counters.roundEnd}
                                        onChange={(event, value) => setGameProperties({...gameProperties, counters: {...gameProperties.counters, roundEnd: value }})}
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
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}><Header size={4}>Advanced Settings</Header></Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}><Header size={6}>Visibility</Header></Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                onChange={e => setGameProperties({...gameProperties, visibility: !gameProperties.visibility})}
                                                name="visibility"
                                                color="primary"
                                            />
                                        }
                                        style={blueText}
                                        label={gameProperties.visibility ? 'Game will be public' : 'Game will be private'}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}><Header size={6}>Lose points on incorrect answers</Header></Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                onChange={e => setGameProperties({...gameProperties, losePoints: !gameProperties.losePoints})}
                                                name="losePoints"
                                                color="primary"
                                            />
                                        }
                                        style={blueText}
                                        label= {gameProperties.losePoints ? 'Player will lose points' : 'Player will not lose points'}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}><Header size={6}>Extra points based on speed</Header> </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                onChange={e => setGameProperties({...gameProperties, pointsForSpeed: !gameProperties.pointsForSpeed})}
                                                name="pointsForSpeed"
                                                color="primary"
                                            />
                                        }
                                        style={blueText}
                                        label={gameProperties.pointsForSpeed ? 'Player will get extra points' : 'Player will not get extra points'}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        <Box m={2}>
            <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => createGame(gameProperties)}
                startIcon={<ChevronRight />}
            >Create & Join</Button>
        </Box>
    </Container>
}

export default CreateGame