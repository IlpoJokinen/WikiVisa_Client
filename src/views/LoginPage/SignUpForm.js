import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import clsx from 'clsx'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import InputLabel from '@material-ui/core/InputLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import { blue } from '@material-ui/core/colors'
import { withStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
      width: '35ch'
    }
  }))

const blueText = {
    fontFamily: 'IBM Plex Sans',
    color: '#879DFA',
}

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

const SignUpForm = () => {
    const classes = useStyles()
    const [values, setValues] = useState({
        gamertag: '',
        password: '',
        email: '',
        firstname: '',
        lastname: '',
        showPassword: false,
      })

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    }
    
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <Grid container>
                <Grid item xs={6}>
                    <Grid container>
                        <Grid item>
                            <FormControl className={clsx(classes.margin, classes.textField)}>
                                <InputLabel htmlFor="gamertag-input" style={blueText}>Gamertag</InputLabel>
                                <Input
                                    id="gamertag-input"
                                    value={values.gamertag}
                                    onChange={handleChange('gamertag')}
                                />
                                <FormHelperText id="helper-text-gamertag" style={blueText}>By this name you’ll appear to others</FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <FormControl className={clsx(classes.margin, classes.textField)}>
                                <InputLabel htmlFor="password-input" style={blueText}>Password</InputLabel>
                                <Input
                                id="password-input"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                    </InputAdornment>
                                }
                                />
                                <FormHelperText id="helper-text-password" style={blueText}>Create a good one (for your own sake)!</FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <FormControl className={clsx(classes.margin, classes.textField)}>
                                <InputLabel htmlFor="email-input" style={blueText}>Email</InputLabel>
                                <Input
                                    id="email-input"
                                    value={values.email}
                                    onChange={handleChange('email')}
                                />
                                <FormHelperText id="helper-text-email" style={blueText}>Enter valid email address</FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container style={{marginLeft: 110, marginTop: 30}}>
                        <Grid item>
                            <BlueButton variant="contained" color="primary">Sign Up</BlueButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container>
                        <Grid item>
                            <FormControl className={clsx(classes.margin, classes.textField)}>
                                <InputLabel htmlFor="firstname-input" style={blueText}>Firstname (Optional)</InputLabel>
                                <Input
                                    id="firstname-input"
                                    value={values.firstname}
                                    onChange={handleChange('firstname')}
                                />
                                <FormHelperText id="helper-text-firstname" style={blueText}>Enter your firstname</FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <FormControl className={clsx(classes.margin, classes.textField)}>
                                <InputLabel htmlFor="lastname-input" style={blueText}>Lastname (Optional)</InputLabel>
                                <Input
                                    id="lastname-input"
                                    value={values.lastname}
                                    onChange={handleChange('lastname')}
                                />
                                <FormHelperText id="helper-text-lastname" style={blueText}>Enter your lastname</FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container style ={{marginLeft: 8, marginTop: 20}}>
                        <Grid item>
                            <FormControl component="fieldset">
                            <FormLabel component="legend"style={blueText}>Gender (Optional)</FormLabel>
                            <RadioGroup row aria-label="gender" name="gender1">
                                <FormControlLabel style={blueText} value='female' control={<Radio color="primary"/>} label="Female" labelPlacement="start"/>
                                <FormControlLabel style={blueText} value='male' control={<Radio color="primary"/>} label="Male" labelPlacement="start"/>
                                <FormControlLabel style={blueText} value='other' control={<Radio color="primary"/>} label="Other" labelPlacement="start"/>
                            </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
export default SignUpForm