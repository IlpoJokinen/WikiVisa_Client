import React from 'react'
import { Container, FormControl, FormControlLabel, RadioGroup, Radio } from '@material-ui/core'

const blueText = {
    fontFamily: 'IBM Plex Sans',
    color: '#879DFA'
}

const RadioSelector = ({text}) => {

    return  <Container>
        <FormControl component="fieldset">
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
        <small>{text}</small>
    </FormControl>
</Container>
}

export default RadioSelector
