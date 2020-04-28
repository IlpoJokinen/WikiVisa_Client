import React from 'react'
import { Grid } from '@material-ui/core/'
import Player2 from "./components/Player"
import BlueDivider from "../../components/UI/BlueDivider"
import GameButton from "../../components/UI/GameButton"
import Chat from "../../components/UI/Chat/Chat"
import Header from "../../components/UI/Header"

const Lobby = ({ gamertag, players, startGame, started, isCreator, setPlayerReadyLobby, messages, sendMessage }) => {
    let allPlayers = ""
    document.title = started ? 'Game Is Starting!' : 'Game Lobby'
    if (players.length) {
        allPlayers = players.map(player => {
            return <Player2 key={player.id} gamertag={player.gamertag} thisPlayersTag={gamertag === player.gamertag} lobbyReady={player.lobbyReady} />
        })
    }
    return <Grid container direction="column">
        <Grid container sm={12}>
            <Grid item sm={12} style={{ textAlign:"center", width:"100%"}}>
                <BlueDivider>
                    Room Code
                </BlueDivider>
            </Grid>
        </Grid>
        <Grid container className="lobbyPlayers">
            <Grid container sm={6} direction="column">
                <Grid item><Header size={5}>Players</Header></Grid>
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
                    {started ?<Grid item> timeri </Grid> : null }    
                    <Grid item>
                        <Header size={5}>Chat</Header>
                    </Grid>
                    <Chat gamertag={gamertag} messages={messages} sendMessage={sendMessage} />
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}

export default Lobby