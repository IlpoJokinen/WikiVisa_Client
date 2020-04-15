import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import SignInForm from './UI/SignInForm'
import SignUpForm from './UI/SignUpForm'
import SwitchComponent from './UI/Switch'

const blueText = {
    fontFamily: 'IBM Plex Sans',
    color: '#879DFA',
}
const signInComponent= {
    height: '100vh',
    width: 900
}

const SignIn = () => {
    const [checked, setChecked] = useState(false)
    return (
        <div style={{position: 'absolute', top: 0, bottom: 0}}>
            <Grid container>
                  <Grid item style={signInComponent}>
                    <SwitchComponent setChecked={setChecked} checked={checked}/>
                    {!checked ?
                        <div style={{marginLeft: 170}}>
                            <div style={blueText}><h1>Sign In</h1></div>
                            <div><SignInForm /></div>
                        </div> : 
                        <div style={{marginLeft: 170}}>
                            <div style={blueText}><h1>Sign Up</h1></div>
                            <div><SignUpForm /></div>
                        </div>
                    }
                  </Grid>
            </Grid>
        </div>
    )
}

export default SignIn
