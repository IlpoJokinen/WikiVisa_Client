import React from 'react'
import { Grid } from '@material-ui/core/'
import Player2 from "./components/Player2"
import BlueDivider from "../../UI/BlueDivider"
import GameButton from "../../UI/GameButton"
import Chat from "../../UI/chat/Chat"

const Lobby = ({ gamertag, players, timer, roomCode, startGame, started, isCreator, setPlayerReadyLobby, messages, sendMessage }) => {

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
    if (playerz.length) {
        allPlayers = playerz.map(player => {
            return <Player2 key={player.id} gamertag={player.gamertag} thisPlayersTag={gamertag === player.gamertag} lobbyReady={player.lobbyReady} />
        })
    }

    return (

        <Grid container direction="column">
            <Grid container sm={12} >
                <Grid item sm={12} style={{ textAlign:"center", width:"100%"}}>
                    <BlueDivider>
                        Room Code
                    </BlueDivider>
                </Grid>
            </Grid>
            
            <Grid container className="lobbyPlayers">
                <Grid container sm={6} direction="column">
                    <Grid item>
                        <h5 style={{color:"#879DFA"}}>Players</h5>
                    </Grid>
                    {allPlayers}
                    <Grid container style={{marginBottom:20}}>
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
                <Grid item sm={6} xs={12}>
                    <Grid container direction="column">
                        {started
                        ?<Grid item>
                            timeri
                        </Grid>
                        : null
                        }   
                        <Chat gamertag={gamertag} messages={messages} sendMessage={sendMessage}></Chat>
                    </Grid>
                </Grid>
                
            </Grid>
        </Grid>


    );
};

export default Lobby;