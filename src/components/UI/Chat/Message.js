import React from 'react'
import { Grid, Box, Container, Typography, Card, CardContent } from '@material-ui/core/'

const Message = ({ gamertag, message }) => {
    const ownMessage = gamertag === message.gamertag
    const style = ownMessage ? "own" : "other"
    return <Box className="message" align={ownMessage ? "right" : "left"}>
        <Card style={{display: 'inline-block', width: 'fit-content'}}>
            <CardContent className={style.concat(" messageCard")} style={{padding: "4px 6px"}}>
                <Typography color="textSecondary" gutterBottom style={{fontSize:12}} align={ownMessage ? "right" : "left"}>
                    {ownMessage ? "You": message.gamertag}
                </Typography>
                <Typography gutterBottom className="messageText" >
                    {message.message}
                </Typography>
            </CardContent>
        </Card>
    </Box>
}

export default Message