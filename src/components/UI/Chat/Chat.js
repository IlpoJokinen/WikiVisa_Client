import React, { useState, useEffect } from 'react'
import { Box, Container } from '@material-ui/core/'
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
    }, [])

    let messageComponents = messages.map((message, i) => {
        return <Message key={i} gamertag={gamertag} message={message} />
    })

    return <Container disableGutters>
        <Box>
            <Container disableGutters className="chatBox">
                { messageComponents }
            </Container>
        </Box>
        <Box>
            <ChatTextField sendMessage={sendMessage} />
        </Box>
    </Container>
}

export default Chat