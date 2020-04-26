import React from 'react'
import { Grid } from '@material-ui/core/'
import ChatTextField from "./ChatTextField"


const Chat = () => {
    return (
        <Grid item >
            <Grid item style={{margin:"4px 15px 6px 15px"}} className="chatBox">
                {}
            </Grid>
            <ChatTextField></ChatTextField>
        </Grid>
    );
};

export default Chat;