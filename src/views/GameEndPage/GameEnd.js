import React from 'react'
import { Grid, withStyles, Container, makeStyles } from '@material-ui/core/'
import GameEndInfoBox from '../../components/UI/GameEndInfoBox'
import GameEndPlayerList from "./components/GameEndPlayerList"

const CustomGridItem = withStyles((theme) => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            height: 'auto'
        },
        [theme.breakpoints.up('md')]: {
            height: '100%'
        }
    },
}))(Grid)

const GameEnd = ({ gamertag, players }) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        standings: {
            textAlign: 'center',
        },
        gridTest: {
            [theme.breakpoints.down('sm')]: {
                marginTop: '50px'
            },
            [theme.breakpoints.up('md')]: {
                marginTop: '80px'
            }
        },
    }))
    const classes = useStyles()

    return players.length > 3 ? <Grid container style={{ height: '100%' }}>
                <CustomGridItem style={{ backgroundColor: "#879DFA", color: '#ffffff' }} item xs={12} md={7}>
                    <Container textAlign="center" maxWidth="xs" className={classes.gridTest}>
                        <GameEndInfoBox
                            firstPlace={players[0]}
                            secondPlace={players.length > 1 ? players[1] : null}
                            thirdPlace={players.length > 2 ? players[2] : null} />
                    </Container>
                </CustomGridItem>
                <CustomGridItem item xs={12} md={5}>
                    <Container maxWidth="xs" className={classes.gridTest}>
                        <GameEndPlayerList players={players} gamertag={gamertag}/>
                    </Container>
                </CustomGridItem>
            </Grid> :
                <Grid container style={{ height: '100%' }}>
                    <CustomGridItem style={{ backgroundColor: "#879DFA", color: '#ffffff' }} item xs={12}>
                        <Container textAlign="center" maxWidth="xs" className={classes.gridTest}>
                            <GameEndInfoBox
                                firstPlace={players[0]}
                                secondPlace={players.length > 1 ? players[1] : null}
                                thirdPlace={players.length > 2 ? players[2] : null} />
                        </Container>
                    </CustomGridItem>
                </Grid>
}

export default GameEnd
