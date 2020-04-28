import React from 'react'
import { Grid } from '@material-ui/core/'
import Player2 from "./UI/Player2"
import BlueDivider from "./UI/BlueDivider"
import GameButton from "./UI/GameButton"
import Header from './UI/Header'

const Lobby = ({ gamertag, players, timer, roomCode, startGame, started, isCreator, setPlayerReadyLobby, game }) => {
    console.log(game)
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
                    <BlueDivider textCenter>{roomCode}</BlueDivider>
                </Grid>
            </Grid>
            
            <Grid container className="lobbyPlayers">
                <Grid container sm={6} direction="column">
                    <Grid item><Header size={5}>Players</Header></Grid>
                    {allPlayers}
                    <Grid container >
                        <Grid item>
                            <GameButton id="lobbyReadyButton" title="I'm Ready To Play" onClickFunc={setPlayerReadyLobby}></GameButton>
                        </Grid>
                        { isCreator && !started
                            ? <Grid item>
                                <GameButton id="lobbyStartButton" title="Start Game" onClickFunc={startGame}></GameButton>
                            </Grid>
                            : null
                        }
                        
                    </Grid>
                    
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        {started
                        ?<Grid item>
                            timeri
                        </Grid>
                        : null
                        }   
                        <Grid item sm={6}>chatti</Grid>
                    </Grid>
                </Grid>
                
            </Grid>
        </Grid>


    );
};

export default Lobby;