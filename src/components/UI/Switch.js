import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Switch from '@material-ui/core/Switch'
import { withStyles } from '@material-ui/core/styles'
import Header from './Header'
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
    track: {}
})(Switch)

const SwitchComponent = ({setLoginForm, loginForm}) => {
    return <Grid container>
        <Grid item>
            <PurpleSwitch checked={loginForm} onChange={() => setLoginForm(!loginForm)} name="checked" />
            <Header size={6} blue inline>
                Sign {loginForm ? ' Up' : ' In'}
            </Header>
        </Grid>
    </Grid>
}
export default SwitchComponent