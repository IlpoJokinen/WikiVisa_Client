import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core/'
import ChatTextField from "./ChatTextField"
import Message from "./Message"

const Chat = ({ gamertag, socket, sendMessage }) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        let mounted = true
        socket.on("send messages", messages => {
            if(mounted) {
                setMessages(messages)
            }
        })
        return () => mounted = false
    })

    let messageComponents = messages.map((message, i) => {
        return <Message key={i} gamertag={gamertag} message={message}></Message>
    })

    return (
        <Grid item >
            <Grid container direction="column" style={{ margin: "4px 0 6px 0" }} className="chatBox">
                <Grid container direction="column">
                    {messageComponents}
                </Grid>
            </Grid>
            <ChatTextField sendMessage={sendMessage}></ChatTextField>
        </Grid>
    );
};

export default Chat;