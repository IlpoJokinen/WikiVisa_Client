import React from 'react';
import { Grid, List, ListItem, ListItemText, Typography, Card, CardContent } from '@material-ui/core/'


const Message = ({ gamertag, message }) => {

    const cardStyle = gamertag === message.gamertag ? "cardStyleOwn" : "cardStyleOther"
    const messageStyle = gamertag === message.gamertag ? "messageOwn" : "messageOther"
 
    return (
        <Grid item className={messageStyle.concat(" message")} style={{ margin: 2 }}>
            <Card>
                <CardContent className={cardStyle} style={{padding: "4px 6px"}}>
                    <Typography color="textSecondary" gutterBottom style={{fontSize:12}} align={gamertag === message.gamertag ? "right" : "left"}>
                        {gamertag === message.gamertag ? "You": message.gamertag}
                    </Typography>
                    <Typography color="#666699" gutterBottom style={{fontSize:15, overFlowWrap: "break-word", wordWrap: "break-word", hyphens: "auto", marginBottom:2, paddingRight:20}}>
                        {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

    );
};

export default Message;