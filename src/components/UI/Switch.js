import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Switch from '@material-ui/core/Switch'
import { withStyles } from '@material-ui/core/styles'
import { blue, deepPurple } from '@material-ui/core/colors'

const PurpleSwitch = withStyles({
    switchBase: {
      color: blue[500],
      '&$checked': {
        color: deepPurple[300],
      },
      '&$checked + $track': {
        backgroundColor: deepPurple[300],
      },
    },
    checked: {},
    track: {},
  })(Switch)

const option = {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 700,
    marginTop: 55
}

const SwitchComponent = ({setChecked, checked, switchString}) => {
    function handleChange() {
      setChecked(!checked)
    }
      return (
        <Grid container style={option}>
            <Grid item>
                <PurpleSwitch checked={checked} onChange={handleChange} name="checked" />
            </Grid>
            <Grid item style={{color: '#879DFA', fontFamily: 'IBM Plex Sans'}}>
                {checked ? <h6><b>Sign Up</b></h6> : <h6><b>Sign In</b></h6>}
            </Grid>
        </Grid>
      )
}
export default SwitchComponent