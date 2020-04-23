import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import clsx from 'clsx'
import Input from '@material-ui/core/Input'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Switch from '@material-ui/core/Switch'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemText from '@material-ui/core/ListItemText'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'
import Chip from '@material-ui/core/Chip'
import { blue } from '@material-ui/core/colors'
import Button from '@material-ui/core/Button'

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
  
const BlueButton = withStyles((theme) => ({
    root: {
        textAlign: 'center',
        fontFamily: 'IBM Plex Sans',
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
        '&:hover': {
         backgroundColor: blue[700],
      },
    },
  }))(Button)

const blueText = {
    fontFamily: 'IBM Plex Sans',
    color: '#879DFA'
}
const header = {
    fontFamily: 'IBM Plex Sans',
    color: '#879DFA',
    width: '100%',
    textAlign: 'center'
}
const roomCodeInput = {
    width: '100%'
}
const centeredElement = {
    width: '50%',
    position: 'absolute',
    left: '50%',
    marginLeft: -300
}
const ITEM_HEIGHT = 50
const ITEM_PADDING_TOP = 40
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
}
const CreateGame = ({setView, createGame}) => {
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
    const [categoryCheck, setcategoryCheck] = useState([])
    const categories = [
        'Geography',
        'IT',
        'Math',
        'History',
        'Landmarks',
        'Humans',
        'Sports'
      ]

    const handleCheck = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    }
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    }
    const handleChoice = (event) => {
        setcategoryCheck(event.target.value);
      }
 
    return <Grid container style={centeredElement}>
                <Grid item xs={12} style={header}><h1>Setup your personal game</h1></Grid>
                <Grid item  xs={12} style={roomCodeInput}>
                    <FormControl className={clsx(classes.margin, classes.textField)} style={{width: '100%'}}>
                            <InputLabel htmlFor="roomcode-input"style={blueText}>Enter Roomcode</InputLabel>
                            <Input
                                id="roomcode-input"
                                value={values.gamertag}
                                onChange={handleChange('roomcode')}
                            />
                            <FormHelperText id="helper-text-roomcode"style={blueText}>You can specify a room code or leave it empty to let us generate it for you</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}style={{height: '70.5%'}}>
                        <Grid item xs={12} style={blueText}><h5 style={{textAlign: 'center', marginTop: 20, marginBottom: 20}}>Basic settings</h5></Grid>
                    <Grid item xs={12} style={blueText}><h6 style={{marginBottom: 20}}>Select question categories</h6></Grid>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="categories-checkbox-label" style={blueText}>Categories</InputLabel>
                        <Select
                        labelId="categories-checkbox-label"
                        id="categories-checkbox"
                        multiple
                        value={categoryCheck}
                        onChange={handleChoice}
                        input={<Input id="select-multiple-chip"/>}
                        renderValue={(selected) => (
                            <div className={classes.chips}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} className={classes.chip} />
                            ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                        >
                            {categories.map((c) => (
                                <MenuItem key={c} value={c}>
                                <Checkbox checked={categoryCheck.indexOf(c) > -1} />
                                <ListItemText primary={c} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl component="fieldset" style={{marginTop: 30, marginBottom: 30}}>
                        <FormLabel component="legend" style={{marginBottom: 20, fontFamily: 'IBM Plex Sans', color: '#879DFA'}}>Question count</FormLabel>
                        <RadioGroup row aria-label="position" name="position" defaultValue="10">
                            <FormControlLabel
                            style={blueText}
                            value="5"
                            control={<Radio color="primary" />}
                            label="5"
                            labelPlacement="top"
                            />
                            <FormControlLabel
                            style={blueText}
                            value="10"
                            control={<Radio color="primary" />}
                            label="10"
                            labelPlacement="top"
                            />
                            <FormControlLabel
                            style={blueText}
                            value="15"
                            control={<Radio color="primary" />}
                            label="15"
                            labelPlacement="top"
                            />
                            <FormControlLabel
                            style={blueText}
                            value="20"
                            control={<Radio color="primary" />}
                            label="20"
                            labelPlacement="top"
                            />
                            <FormControlLabel
                            style={blueText}
                            value="25"
                            control={<Radio color="primary" />}
                            label="25"
                            labelPlacement="top"
                            />
                        </RadioGroup>
                        <FormHelperText id="helper-text-roomcode"style={blueText}>How many questions do you want to answer?</FormHelperText>
                    </FormControl>
                    <FormLabel component="legend" style={blueText}>Visibility</FormLabel>
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
                    <Grid item style={{marginTop: 50}}><BlueButton variant="contained" color="primary" onClick={() => createGame(gameProperties)}>Create Game</BlueButton></Grid>
                    <Grid item style={{marginTop: 50}}><BlueButton variant="contained" color="primary" onClick={() => setView('play')}>GO BACK</BlueButton></Grid>
                        
                </Grid>
                <Grid item xs={6} style={{height: '70.5%'}}>
                     <Grid item xs={12} style={blueText}><h5 style={{textAlign: 'center', marginTop: 20, marginBottom: 20}}>Advanced settings</h5></Grid>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" style={{marginBottom: 20, fontFamily: 'IBM Plex Sans', color: '#879DFA'}}>Answer time</FormLabel>
                        <RadioGroup row aria-label="position" name="position" defaultValue="10">
                            <FormControlLabel
                            style={blueText}
                            value="5"
                            control={<Radio color="primary" />}
                            label="5"
                            labelPlacement="top"
                            />
                            <FormControlLabel
                            style={blueText}
                            value="10"
                            control={<Radio color="primary" />}
                            label="10"
                            labelPlacement="top"
                            />
                            <FormControlLabel
                            style={blueText}
                            value="15"
                            control={<Radio color="primary" />}
                            label="15"
                            labelPlacement="top"
                            />
                            <FormControlLabel
                            style={blueText}
                            value="20"
                            control={<Radio color="primary" />}
                            label="20"
                            labelPlacement="top"
                            />
                            <FormControlLabel
                            style={blueText}
                            value="25"
                            control={<Radio color="primary" />}
                            label="25"
                            labelPlacement="top"
                            />
                        </RadioGroup>
                        <FormHelperText id="helper-text-roomcode"style={blueText}>This is the answering time for each question</FormHelperText>
                    </FormControl>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" style={{marginBottom: 20, marginTop: 20, fontFamily: 'IBM Plex Sans', color: '#879DFA'}}>Round end timer</FormLabel>
                        <RadioGroup row aria-label="position" name="position" defaultValue="10">
                            <FormControlLabel
                            style={blueText}
                            value="5"
                            control={<Radio color="primary" />}
                            label="5"
                            labelPlacement="top"
                            />
                            <FormControlLabel
                            style={blueText}
                            value="10"
                            control={<Radio color="primary" />}
                            label="10"
                            labelPlacement="top"
                            />
                            <FormControlLabel
                            style={blueText}
                            value="15"
                            control={<Radio color="primary" />}
                            label="15"
                            labelPlacement="top"
                            />
                            <FormControlLabel
                            style={blueText}
                            value="20"
                            control={<Radio color="primary" />}
                            label="20"
                            labelPlacement="top"
                            />
                            <FormControlLabel
                            style={blueText}
                            value="25"
                            control={<Radio color="primary" />}
                            label="25"
                            labelPlacement="top"
                            />
                        </RadioGroup>
                        <FormHelperText id="helper-text-roomcode"style={blueText}>This is the timer for downtime between each question showing correct answers</FormHelperText>
                    </FormControl>
                    <FormLabel component="legend" style={{marginTop: 20, fontFamily: 'IBM Plex Sans', color: '#879DFA'}}>Lose points on incorrect answers</FormLabel>
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
                    <FormLabel component="legend" style={blueText}>Extra points based on speed</FormLabel>
                    <FormControlLabel
                        control={
                            <Switch
                                onChange={handleCheck}
                                name="checked2"
                                color="primary"
                            />
                        }
                        style={{marginBottom: 65, fontFamily: 'IBM Plex Sans', color: '#879DFA'}}
                        label={state.checked2 ? 'Player will get extra points' : 'Player will not get extra points'}
                    />
                </Grid>
            </Grid>
}

export default CreateGame
