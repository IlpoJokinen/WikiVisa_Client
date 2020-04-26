import React from 'react'
import { Grid, withStyles, Button } from '@material-ui/core/'
import Player2 from "./UI/Player2"

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

const Lobby = ({ gamertag, players, timer, roomCode, startGame, started, isCreator, setPlayerReadyLobby }) => {

    let playerz = [
        {
            id: 0,
            gamertag: "lkjdkjgld"
        },
        {
            id:1,
            gamertag: "LDKGJDFKLJ"
        },
        {
            id:2,
            gamertag: "klhzjgfd",
            lobbyReady: true
        }, {
            id: 0,
            gamertag: "lkjdkjgld"
        },
        {
            id:1,
            gamertag: "LDKGJDFKLJ"
        },
        {
            id:2,
            gamertag: "klhzjgfd",
            lobbyReady: true
        }
    ]

    let allPlayers = ""
    document.title = started ? 'Game Is Starting!' : 'Game Lobby'
    if (players.length) {
        allPlayers = players.map(player => {
            return <Player2 key={player.id} gamertag={player.gamertag} thisPlayersTag={gamertag === player.gamertag} lobbyReady={player.lobbyReady} />
        })
    }
    return (

        <Grid container direction="column">
            <Grid container sm={12} >
                <Grid item sm={12} style={{ textAlign:"center", width:"100%"}}>
                    <h2 style={{padding: "40px 0px 40px 0px", color:"#879DFA", backgroundColor:"#d7e9f5"}}>Room Code</h2>
                </Grid>
            </Grid>
            
            <Grid container style={{padding: 30, height:"auto"}}>
                <Grid container sm={6} direction="column">
                    <Grid item>
                        <h5 style={{color:"#879DFA"}}>Players</h5>
                    </Grid>
                    {allPlayers}
                    <Grid item>
                        <Button onClick={setPlayerReadyLobby}>I'm Ready To Play</Button>
                    </Grid>
                </Grid>
                
                
                
                <Grid item sm={6}>chatti</Grid>
            </Grid>
        </Grid>


    );
};

export default Lobby;