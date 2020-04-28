import React, { useState } from 'react'
import { Grid, TextField } from '@material-ui/core/'
import GameButton from '../GameButton'


const ChatTextField = ({ sendMessage }) => {

    const [message, setMessage] = useState("")

    function handleChange(event) {
        setMessage(event.target.value)
    }

    function handleClick(message) {
        sendMessage(message)
        setMessage("")
    }

    return (
        <Grid container>
            <Grid item className="chatTextField" sm={8} xs={8}>
                <TextField value={message} id="outlined-basic" label="Send Message" variant="outlined" fullWidth multiLine size="small" onChange={handleChange} />
            </Grid>
            <Grid item sm={4} xs={4}>
                <GameButton id="lobbySendMessageButton" title="Send" onClickFunc={() => handleClick(message)}></GameButton>
            </Grid>
        </Grid>
        
    )
}

export default ChatTextField