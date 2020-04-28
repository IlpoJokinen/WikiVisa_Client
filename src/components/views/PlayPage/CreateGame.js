import React, { useState } from 'react'
import { Grid, FormHelperText, FormControl, InputLabel, Input, FormControlLabel, Switch, Container} from '@material-ui/core'
import GameButton from '../../UI/GameButton'
import CategoryList from '../../UI/CategoryList'
import Header from '../../UI/Header'
import BlueDivider from '../../UI/BlueDivider'
import RadioSelector from '../../UI/RadioSelector'

const blueText = {
    fontFamily: 'IBM Plex Sans',
    color: '#879DFA'
}
const optimizedItem = {
    textAlign: 'center',
    marginBottom: 10
}

const CreateGame = ({setView, createGame, setRoomCode, creatingState}) => {
    const [selectedCategories, setSelectedCategories] = useState([])
    const [state, setState] = useState({
    checked1: false,
    checked2: false,
    checked3: false
    })
    const [categories, setCategories] = useState([
        {prettyName: 'Geography', id: 0},
        {prettyName: 'Literature', id: 1},
        {prettyName: 'History', id: 2},
        {prettyName: 'IT', id: 3},
        {prettyName: 'Humans', id: 4},
        {prettyName: 'Sports', id: 5},
        {prettyName: 'Math', id: 6}
    ])
    const [gameProperties, setGameProperties] = useState({
        question: {
            categories: [],
            count: ""
        },
        counters: {
            answer: "",
            roundEnd: ""
        },
        visibility: false,
        losePoints: false
        //Tähän vielä extrapoints! ja serverille myös
    })
    //console.log('properties:', gameProperties
    const addToSelectedCategories = event => {
        let options = event.target.options,
            selected = []
        for(let i = 0; i < options.length; i++) {
            if(options[i].selected) {
                selected.push(options[i].value)
            }
        }
        setGameProperties(prevState => ({...prevState, question: {...prevState.question, categories: selected}}))
    }

    return <Grid container spacing={4} style={{height: '100%'}}>
                <BlueDivider textCenter>Setup your personal game</BlueDivider>
                <Grid item xs={12}>
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <GameButton id="createGamePageButton" title="Return" onClickFunc={() => setView('play')}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Header size={4}>Enter Roomcode</Header>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl disabled={creatingState}>
                                            <InputLabel htmlFor="roomcode-input" style={{color: '#879DFA'}}>Enter Roomcode</InputLabel>
                                            <Input id="roomcode-input" onChange={e => setRoomCode(e.target.value)}/>
                                            <FormHelperText style={{color: '#879DFA'}}>You can specify a room code or leave it empty to let us generate it for you</FormHelperText>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
                <Grid item xs={12}>
                    <Container>
                        <Grid container spacing={8}>
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
                                                    categories={categories} 
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}><Header size={6}>Question Count</Header></Grid>
                                            <Grid item xs={12}><RadioSelector id={0} text={'How many questions do you want to answer?'} creatingState={creatingState} setGameProperties={setGameProperties} gameProperties={gameProperties}/></Grid>
                                        </Grid> 
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}><Header size={6}>Answer Time</Header></Grid>
                                            <Grid item xs={12}><RadioSelector id={1} text={'Choose answer time.'} creatingState={creatingState} setGameProperties={setGameProperties} gameProperties={gameProperties}/></Grid>
                                        </Grid> 
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}><Header size={6}>Round End Time</Header></Grid>
                                            <Grid item xs={12}><RadioSelector id={2} text={'Choose time to view your score between questions.'} creatingState={creatingState} setGameProperties={setGameProperties} gameProperties={gameProperties}/></Grid>
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
                                                    label={state.checked3 ? 'Game will be public' : 'Game will be private'}
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
                                                    label= {state.checked1 ? 'Player will lose points' : 'Player will not lose points'}
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
                                                        // onChange={}
                                                            name="extraPoints"
                                                            color="primary"
                                                        />
                                                    }
                                                    style={{fontFamily: 'IBM Plex Sans', color: '#879DFA'}}
                                                    label={state.checked2 ? 'Player will get extra points' : 'Player will not get extra points'}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>  
                </Grid>
                <Grid item xs={12}>
                    <Container>
                        <Grid container>
                            <GameButton id="createGamePageButton" title="Create Game" onClickFunc={() => createGame(gameProperties)}/>   
                        </Grid>
                    </Container>
                </Grid>  
        </Grid>
}

export default CreateGame
