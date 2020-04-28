import React from 'react'
import { Grid } from '@material-ui/core/'
import ChatTextField from "./ChatTextField"
import Message from "./Message"

const Chat = ({ gamertag, messages, sendMessage }) => {

    let messageComponents = ""
    if(messages.length) {
        messageComponents = messages.map(message => {
        return <Message gamertag={gamertag} message={message}></Message>
        })
    }


    return (
        <Grid item >
            <Grid container direction="column" style={{margin:"4px 0px 6px 0px"}} className="chatBox">
                {messageComponents}
            </Grid>
            <ChatTextField sendMessage={sendMessage}></ChatTextField>
        </Grid>
    );
};

export default Chat;