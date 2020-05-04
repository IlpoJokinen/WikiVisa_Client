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
        return <Message key={i} gamertag={gamertag} message={message} />
    })

    return <Grid container>
        <Grid item xs={12}>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container direction="column" className="chatBox">
                        { messageComponents }
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <ChatTextField sendMessage={sendMessage} />
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}

export default Chat