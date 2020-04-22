import React from 'react'
import { Box, Grid, Button, withStyles, makeStyles } from '@material-ui/core/'
import GameButton from '../../UI/GameButton'
import StatusBox from '../../UI/StatusBox'
import { blue } from '@material-ui/core/colors'

const LeftGridItem = withStyles((theme) => ({
    root: {
        padding: 20,
        backgroundColor: '#879DFA',
        [theme.breakpoints.down('sm')]: {
            height: 'auto'
        },
        [theme.breakpoints.up('md')]: {
            height: '100%'
        }
    },
}))(Grid)

const RightGridItem = withStyles((theme) => ({
    root: {
        padding: 20,
        backgroundColor: 'white',
        [theme.breakpoints.down('sm')]: {
            height: 'auto'
        },
        [theme.breakpoints.up('md')]: {
            height: '100%'
        }
    },
}))(Grid)

const BlueButton = withStyles((theme) => ({
    root: {
        textAlign: 'center',
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
        '&:hover': {
            backgroundColor: blue[700],
        },
    },
}))(Button)
  
const WelcomePage = ({setScreen}) => {
    return <Grid container>
        <LeftGridItem item xs={12} md={8}>
                <Grid item>
                    <h1>Welcome to WikiQuiz!</h1>
                </Grid>
                <Grid item md={6} xs={12}>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                </Grid>
                <Grid item md={6} xs={12} item>
                    <StatusBox activePlayers={0}/>
                </Grid>
        </LeftGridItem>
        <RightGridItem item xs={12} md={4}>
            <h2>How would you like to play?</h2>
            <div class="welcomePageGameButtonList">
                <GameButton id="QuickGameButton" title="Quick Game" />
                <GameButton id='CreateGameButton' title="Create Game" onClick={() => setScreen('createGame')} />
                <GameButton id='FindGameButton' title="Find Game" />
            </div>
        </RightGridItem>
    </Grid>
}

export default WelcomePage

