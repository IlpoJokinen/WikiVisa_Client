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
import InputLabel from '@material-ui/core/InputLabel'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'

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


const SignInForm = () => {
    const classes = useStyles()
    const [values, setValues] = useState({
        gamertag: '',
        password: '',
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
                <Grid item>
                    <FormControl className={clsx(classes.margin, classes.textField)}>
                        <InputLabel htmlFor="gamertag-input"style={blueText}>Gamertag</InputLabel>
                        <Input
                            id="gamertag-input"
                            value={values.gamertag}
                            onChange={handleChange('gamertag')}
                        />
                        <FormHelperText id="helper-text-gamertag"style={blueText}>Enter your gamertag</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item>
                    <FormControl className={clsx(classes.margin, classes.textField)}>
                        <InputLabel htmlFor="password-input"style={blueText}>Password</InputLabel>
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
                        <FormHelperText id="helper-text-password"style={blueText}>Enter your password</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container>
                <Typography style={{fontSize: 'small', marginLeft: 8}}>
                    <Link href="#">Forgot password?</Link>
                </Typography>
            </Grid>
            <Grid container style={{marginLeft: 110, marginTop: 30}}>
                <Grid item>
                    <BlueButton variant="contained" color="primary">Sign In</BlueButton>
                </Grid>
            </Grid>
        </div>
    )
}
export default SignInForm