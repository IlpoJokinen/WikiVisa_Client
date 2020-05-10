import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import SwitchComponent from '../../components/UI/Switch'

const LoginPage = () => {
    const [loginForm, setLoginForm] = useState(true)
    return <Grid container>
        <Grid item xs={12}>
            <SwitchComponent setLoginForm={setLoginForm} loginForm={loginForm}/>
        </Grid>
        <Grid item xs={12}>
            { loginForm ? <SignInForm /> : <SignUpForm /> }
        </Grid>
    </Grid>
}

export default LoginPage