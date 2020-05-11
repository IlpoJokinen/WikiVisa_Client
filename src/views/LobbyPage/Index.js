import React from 'react'
import { Grid, Container, Button, makeStyles } from '@material-ui/core/'
import { PlayCircleFilled, DoneOutline } from '@material-ui/icons/'
import PlayerList from "./components/PlayerList"
import BlueDivider from "../../components/UI/BlueDivider"
import Header from "../../components/UI/Header"
import Timer from "../../components/UI/Timer"

const Lobby = ({ gamertag, players, timer, roomCode, startGame, started, isCreator, setPlayerReadyLobby, chat, gameType }) => {
    document.title = started ? 'Game Is Starting!' : 'Game Lobby'
    const useStyles = makeStyles((theme) => ({
        button: {
            marginRight: theme.spacing(1),
            marginBottom: theme.spacing(1)
        }
    }))
    const classes = useStyles()

    let TimerWrapper = () => <Grid item xs={12} style={{marginTop: 25, marginBottom: 50}}>
                            <Container>
                                <Timer color={"#a3b4ff"} timeRemaining={timer} />
                            </Container>
                        </Grid>

    if(gameType === "quick"){
        return <Grid container style={{height: '100%'}} alignItems='center' justify='center'>
                <Grid item style={{textAlign:"center"}}>
                    <Header size={1}>The game is starting in...</Header>
                    <TimerWrapper/>
                </Grid>
        </Grid>
    } else {
        return <Grid container>
        <BlueDivider textCenter>{roomCode}</BlueDivider>
        { 
            started ? <TimerWrapper/> : null
        }  
        <Grid item xs={12}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Header size={5}>Players in the lobby</Header>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <PlayerList gamertag={gamertag} players={players} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            {
                                !started ? <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        disabled={players.find(p => p.gamertag === gamertag).lobbyReady}
                                        className={classes.button}
                                        onClick={setPlayerReadyLobby}
                                        startIcon={<DoneOutline />}
                                    >I'm Ready To Play</Button>
                                    {
                                        isCreator && !started ? <Button
                                        variant="outlined"
                                        color="primary"
                                        className={classes.button}
                                        onClick={startGame}
                                        startIcon={<PlayCircleFilled />}>Start Game</Button> : ''
                                    }
                                </Grid> : ''
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid container>              
                            <Grid item xs={12}>
                                <Header size={5}>Chat</Header>
                            </Grid>
                            <Grid item xs={12}>
                                {chat}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    </Grid>
    }

    
}

export default Lobby