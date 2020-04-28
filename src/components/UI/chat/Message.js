import React from 'react';
import { Grid } from '@material-ui/core/'


const Message = ({ gamertag, message }) => {

    const style = gamertag === message.gamertag ? "messageOwn": "messageOther"
/*<Grid item className={style} style={{alignSelf: "flex-end", margin:4}} sx={12} sm={7}>
            
        </Grid> */
    return (
        
        <div className={style}>
            {message.gamertag}<br></br>
            {message.message}
        </div>
    );
};

export default Message;