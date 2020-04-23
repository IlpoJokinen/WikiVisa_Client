import React from 'react'
import { Grid, withStyles } from '@material-ui/core/'
import GameButton from '../../UI/GameButton'

const CustomGridItem = withStyles((theme) => ({
    root: {
        padding: 20,
        [theme.breakpoints.down('sm')]: {
            height: 'auto'
        },
        [theme.breakpoints.up('md')]: {
            height: '100%'
        }
    },
}))(Grid)

const WelcomePage = ({setView}) => {
    return <Grid container style={{height: '100%'}}>
        <CustomGridItem style={{backgroundColor: '#879DFA', color: '#ffffff'}} item xs={12} md={7}>
            <Grid direction="column" container style={{marginTop: 60}}>
                <Grid direction="column" alignItems="center" container>
                    <Grid xs={12} sm={6} item>
                        <h1>Welcome to WikiQuiz!</h1>
                    </Grid>
                </Grid>
                <Grid direction="column" alignItems="center" container>
                    <Grid xs={12} sm={6} item style={{marginTop: 10}}>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                    </Grid>
                </Grid>
            </Grid>
        </CustomGridItem>
        <CustomGridItem item xs={12} md={5}>
            <Grid direction="column" alignItems="center" container style={{marginTop: 60, textAlign: 'center'}}>
                <Grid xs={12} sm={6} item>
                    <h2>How would you like to play?</h2>
                </Grid>
                <Grid xs={12} sm={6} item className="welcomePageGameButtonList" style={{marginTop: 30}}>
                    <GameButton id="QuickGameButton" title="Quick Game" onClickFunc={() => setView('play_quick')} />
                    <GameButton id='CreateGameButton' title="Create Game" onClickFunc={() => setView('play_create')} />
                    <GameButton id='FindGameButton' title="Find Game" onClickFunc={() => setView('play_find')} />
                </Grid>
            </Grid>
        </CustomGridItem>
    </Grid>
}

export default WelcomePage