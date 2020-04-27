import React, { useState } from 'react'
import { Grid, FormHelperText, FormControl, InputLabel, Input, Radio, RadioGroup, FormControlLabel, FormLabel, Switch, Button, Container } from '@material-ui/core'
import clsx from 'clsx'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import GameButton from '../../UI/GameButton'
import CategoryListing from '../../UI/CategoryListing'
import Header from '../../UI/Header'
import BlueDivider from '../../UI/BlueDivider'
import RadioSelector from '../../UI/RadioSelector'

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
      width: '35ch'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 550,
        maxHeight: 300
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
      backgroundColor: '#879DFA',
      color: 'white'
    }
  }))
const blueText = {
    fontFamily: 'IBM Plex Sans',
    color: '#879DFA'
}
const optimizedItem = {
    textAlign: 'center',
    marginBottom: 10
}

const CreateGame = ({setView, createGame}) => {
    const [selectedCategories, setSelectedCategories] = useState([])
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
    })
    
    const classes = useStyles()
    const [values, setValues] = useState({
        roomcode: ''
      })
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

    const handleCheck = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    }
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    }

    return <Grid container style={{height: '100%'}}>
                <BlueDivider textAlign>Setup your personal game</BlueDivider>
                <Grid item style={{marginBottom: 10, marginLeft: 20}}>
                    <GameButton id="createGamePageButton" title="Return" onClickFunc={() => setView('play')}/>
                </Grid>
                <Grid xs={12} item style={{marginBottom: 25, marginLeft: 20}}>
                    <FormControl>
                        <InputLabel htmlFor="roomcode-input" style={{color: '#879DFA'}}>Enter Roomcode</InputLabel>
                        <Input
                            id="roomcode-input"
                            value={values.gamertag}
                            onChange={handleChange('roomcode')}
                        />
                        <FormHelperText style={{color: '#879DFA'}}>You can specify a room code or leave it empty to let us generate it for you</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid container direction="column" alignItems='center'md={6} xs={12} style={{padding: 15}}>
                    <Grid item style={optimizedItem}>
                        <Header size={4}>Basic Settings</Header>
                    </Grid>
                    <Grid item style={optimizedItem}>
                        <Grid item style={{marginBottom: 10}}>
                            <Header size={6}>Categories in a Game</Header>
                        </Grid>
                        <Grid item>
                            <CategoryListing 
                                    selectedCategories={selectedCategories} 
                                    setSelectedCategories={setSelectedCategories} 
                                    categories={categories} 
                            />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid item style={optimizedItem}>
                            <Header size={6}>Question count</Header>
                        </Grid>
                        <Grid item style={optimizedItem}>
                            <RadioSelector text={'How many questions do you want to answer?'}/>
                        </Grid>
                   </Grid>
                   <Grid item>
                        <Grid item style={optimizedItem}>
                            <Header size={6}>Answer time</Header>
                        </Grid>
                        <Grid item style={optimizedItem}>
                            <RadioSelector text={'Choose answer time.'}/>
                        </Grid>
                   </Grid>
                  <Grid item style={{marginTop: 20}}>
                        <Grid item style={optimizedItem}>
                            <Header size={6}>Round end timer</Header>
                        </Grid>
                        <Grid item style={optimizedItem}>
                            <RadioSelector text={'Choose time to view your score between questions.'}/>
                        </Grid>
                  </Grid>
                </Grid>
                <Grid container md={6} xs={12} direction="column" style={{padding: 15}}>
                    <Grid item style={{textAlign: 'center', marginBottom: 10}}>
                        <Header size={4}>Advanced Settings</Header>
                    </Grid>
                    <Grid item direction='row'>
                        <Grid item >
                            <Header size={6}>Visibility</Header>
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Switch
                                        onChange={handleCheck}
                                        name="checked3"
                                        color="primary"
                                    />
                                }
                                style={blueText}
                                label={state.checked3 ? 'Game will be public' : 'Game will be private'}
                            />
                        </Grid>
                    </Grid>
                   <Grid item>
                       <Grid item>
                            <Header size={6}>Lose points on incorrect answers</Header>
                       </Grid>
                       <Grid item>
                        <FormControlLabel
                                    control={
                                        <Switch
                                            onChange={handleCheck}
                                            name="checked1"
                                            color="primary"
                                        />
                                    }
                                    style={blueText}
                                    label= {state.checked1 ? 'Player will lose points' : 'Player will not lose points'}
                            />
                       </Grid>
                    </Grid>
                    <Grid item>
                        <Grid item>
                            <Header size={6}>Extra points based on speed</Header>
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Switch
                                        onChange={handleCheck}
                                        name="checked2"
                                        color="primary"
                                    />
                                }
                                style={{fontFamily: 'IBM Plex Sans', color: '#879DFA'}}
                                label={state.checked2 ? 'Player will get extra points' : 'Player will not get extra points'}
                            />
                        </Grid>
                    </Grid>
                    <Grid item style={{textAlign: 'center'}}>
                            <GameButton id="createGamePageButton" title="Create Game" onClickFunc={() => createGame(gameProperties)}/>        
                    </Grid>  
                </Grid> 
        </Grid>
}

export default CreateGame
