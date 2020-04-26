import React from 'react'
import { Grid, TextField } from '@material-ui/core/'


const ChatTextField = () => {
    return (
        <Grid item style={{margin:4}} className="chatTextField">
            <TextField id="outlined-basic" label="Send Message" variant="outlined" fullWidth size="small" />
        </Grid>
    )
}

export default ChatTextField