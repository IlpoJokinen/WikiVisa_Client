import React from 'react'
import { Container, FormControl, FormControlLabel, RadioGroup, Radio } from '@material-ui/core'

const blueText = {
    fontFamily: 'IBM Plex Sans',
    color: '#879DFA'
}

const RadioSelector = ({text, creatingState, setGameProperties, gameProperties, id}) => {

    function onClickHandler(event) {
        if(id === 0) {
            setGameProperties({...gameProperties, question: {...gameProperties.question, count: event.target.value }})
        }
        else if(id === 1) {
            setGameProperties({...gameProperties, counters: {...gameProperties.counters, answer: event.target.value }})
        }
        else if(id === 2) {
            setGameProperties({...gameProperties, counters: {...gameProperties.counters, roundEnd: event.target.value }})
        }
    }

    return  <Container>
        <FormControl component="fieldset" disabled={creatingState}>
        <RadioGroup row aria-label="position" name="position" defaultValue="10">
            <FormControlLabel
            style={blueText}
            value="5"
            control={<Radio color="primary" onClick={event => onClickHandler(event)}/>}
            label="5"
            labelPlacement="top"
            />
            <FormControlLabel
            style={blueText}
            value="10"
            control={<Radio color="primary" onClick={event => onClickHandler(event)}/>}
            label="10"
            labelPlacement="top"
            />
            <FormControlLabel
            style={blueText}
            value="15"
            control={<Radio color="primary" onClick={event => onClickHandler(event)}/>}
            label="15"
            labelPlacement="top"
            />
            <FormControlLabel
            style={blueText}
            value="20"
            control={<Radio color="primary" onClick={event => onClickHandler(event)}/>}
            label="20"
            labelPlacement="top"
            />
            <FormControlLabel
            style={blueText}
            value="25"
            control={<Radio color="primary" onClick={event => onClickHandler(event)}/>}
            label="25"
            labelPlacement="top"
            />
        </RadioGroup>
        <small>{text}</small>
    </FormControl>
</Container>
}

export default RadioSelector
