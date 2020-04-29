import React, { useState } from 'react'
import { Grid, TextField } from '@material-ui/core/'
import GameButton from '../GameButton'


const ChatTextField = ({ sendMessage }) => {

    const [message, setMessage] = useState("")

    function handleChange(event) {
        setMessage(event.target.value)
    }

    function handleClick(message) {
        if(message !== "") {
            sendMessage(message)
            setMessage("")
        }
    }

    return (
        <Grid container>
            <Grid item className="chatTextField" sm={8} xs={8}>
                <TextField value={message}  label="Send Message" variant="outlined" fullWidth multiline size="small" onChange={handleChange} />
            </Grid>
            <Grid item sm={4} xs={4}>
                <GameButton className="lobbyButton lobbySendMessageButton" title="Send" onClickFunc={() => handleClick(message)}></GameButton>
            </Grid>
        </Grid>
        
    )
}

export default ChatTextField