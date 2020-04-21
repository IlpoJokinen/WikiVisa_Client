import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'

const alignItemsBlue = {
    fontFamily: 'IBM Plex Sans',
    color: 'white',
    marginLeft: 50,
    marginTop: 100,
    width: '80%'
}
const alignItemsWhite = {
    textAlign: 'center',
    fontFamily: 'IBM Plex Sans',
    color: '#879DFA',
    marginTop: 100
}
const buttons = {
    marginTop: 60
}
const statBox = {
    marginTop: 100,
    marginLeft: 50,
    backgroundColor: 'white',
    padding: 30,
    width: '80%',
    height: '30%',
    color: '#879DFA',
    borderRadius: 20,
    boxShadow: '1px 2px #888888'
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
  
const WelcomePage = ({setScreen}) => {
    
    return (
        <div style ={{position: 'absolute', top: 0, bottom: 0}}>
            <Grid container>
                <Grid item style ={{backgroundColor: '#879DFA', width: '60%', height: '100vh'}}>
                    <div style={alignItemsBlue}>
                        <Grid item>
                            <h1>Welcome to WikiQuiz!</h1>
                            <p style={{marginTop: 80}}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum </p>
                        </Grid>
                    </div>
                    <div style={statBox}>
                        <h4>Active players</h4>
                    </div>
                </Grid>
                <Grid item style ={{width: '40%', height: '100vh'}}>
                    <div style={alignItemsWhite}>
                        <h2>How would you like to play?</h2>
                        <div><BlueButton id="QuickGameButton" style={buttons} variant="contained" color="primary">Quick Game</BlueButton></div>
                        <div><BlueButton id='CreateGameButton' style={buttons} variant="contained" color="primary" onClick={() => setScreen('createGame')}>Create Game</BlueButton></div>
                        <div><BlueButton id='FindGameButton' style={buttons} variant="contained" color="primary">Find Game</BlueButton></div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default WelcomePage

