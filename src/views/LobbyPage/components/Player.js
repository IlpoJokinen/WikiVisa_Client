import React from 'react'
import { Grid, Box } from '@material-ui/core/'
import { Done } from '@material-ui/icons/'

const Player = ({ gamertag, thisPlayersTag, lobbyReady }) => {
    return (
                <Grid container>
                    <Grid item xs={10} style={{maxWidth:"80%"}}>
                        <Box className='gamertagLobby'>{thisPlayersTag ? <p style={{fontWeight: "bold"}} className="gamertagTextLobby">{gamertag}</p> : <p  className="gamertagTextLobby">{gamertag}</p>}</Box>
                    </Grid>
                    {lobbyReady 
                    ? <Grid item xs={2} >
                        <Done  className='doneIconLobby' style={{fontSize:40, alignSelf:"center"}}></Done>
                    </Grid>
                    :<Grid item xs={2} sm={2}></Grid>}
                    
                </Grid>
    )
}

export default Player