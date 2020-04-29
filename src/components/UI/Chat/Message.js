import React from 'react';
import { Grid, Typography, Card, CardContent } from '@material-ui/core/'


const Message = ({ gamertag, message }) => {

    const ownMessage = gamertag === message.gamertag

    const cardStyle = ownMessage ? "cardStyleOwn" : "cardStyleOther"
    const messageStyle = ownMessage ? "messageOwn" : "messageOther"
 
    return (
        <Grid item className={messageStyle.concat(" message")} style={{ margin: 2}}>
            <Card>
                <CardContent className={cardStyle} style={{padding: "4px 6px"}}>
                    <Typography color="textSecondary" gutterBottom style={{fontSize:12}} align={ownMessage ? "right" : "left"}>
                        {ownMessage ? "You": message.gamertag}
                    </Typography>
                    <Typography gutterBottom className="messageText" >
                        {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

    );
};

export default Message;