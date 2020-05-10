import React, { useState } from 'react'
import { Grid, TextField, Button } from '@material-ui/core/'
import { Send } from '@material-ui/icons/'

const ChatTextField = ({ sendMessage }) => {
    const [message, setMessage] = useState("")
    function handleClick(message) {
        if(message !== "") {
            sendMessage(message)
            setMessage("")
        }
    }
    return <Grid container>
        <Grid item xs={12}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField value={message} label="Send Message" variant="outlined" size={'small'} fullWidth multiline onChange={e => setMessage(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleClick(message)}
                        endIcon={<Send />}
                    >
                        Send
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}

export default ChatTextField