import React from 'react'
import { Grid, Container } from '@material-ui/core/'
import Player from "./components/Player"
import BlueDivider from "../../components/UI/BlueDivider"
import GameButton from "../../components/UI/GameButton"
import Header from "../../components/UI/Header"
import Timer from "../../components/UI/Timer"

const Lobby = ({ gamertag, players, timer, roomCode, startGame, started, isCreator, setPlayerReadyLobby, chat }) => {

    let allPlayers = ""
    document.title = started ? 'Game Is Starting!' : 'Game Lobby'
    if (players.length) {
        allPlayers = players.map(player => {
            return <Player key={player.id} gamertag={player.gamertag} thisPlayersTag={gamertag === player.gamertag} lobbyReady={player.lobbyReady} />
        })
    }

    return (
        <div>
            <BlueDivider textCenter>{roomCode}</BlueDivider>
            <Container>
                <Grid container >
                    <Grid container sm={6} direction="column">
                        <Grid item><Header size={5}>Players</Header></Grid>
                        {allPlayers}
                        <Grid container style={{marginBottom:20}}>
                            <Grid item>
                                <GameButton className="lobbyButton lobbyReadyButton" title="I'm Ready To Play" onClickFunc={setPlayerReadyLobby}></GameButton>
                            </Grid>
                            { isCreator && !started
                                ? <Grid item>
                                    <GameButton className="lobbyButton lobbyStartButton" title="Start Game" onClickFunc={startGame}></GameButton>
                                </Grid>
                                : null
                            }
                        </Grid>
                    </Grid>

                    <Grid item sm={6} xs={12}>
                        <Grid container direction="column">
                            {started
                            ?<Grid item>
                                <Timer timeRemaining={timer}></Timer>
                            </Grid>
                            : null
                            }   
                            <Grid item>
                                <Header size={5}>Chat</Header>
                            </Grid>
                            {chat}
                        </Grid>
                    </Grid>
                </Grid>
           
            </Container>
        
        </div>
        


    );
};

export default Lobby;