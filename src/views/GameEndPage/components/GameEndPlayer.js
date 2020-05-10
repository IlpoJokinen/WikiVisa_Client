import React from 'react'
import { ListItem, ListItemIcon, ListItemText, Avatar, Chip } from '@material-ui/core/'
import { Face } from '@material-ui/icons/'

const GameEndPlayer = ({ gamertag, isCurrentPlayer, rank, points }) => {
    return <ListItem divider>
    {
        <ListItemIcon>
            { isCurrentPlayer ? <Face/> 
            : <Avatar style={{
                width: 24,
                height: 24,
            }}>{rank}</Avatar> 
            }
        </ListItemIcon>
    }
    <ListItemText 
        disableTypography={true}
        component="div"
        primary={<div style={{display: 'flex'}}>
            <span style={{
                margin: "0 20px 0 0",
                paddingRight: 5,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
            }}>{gamertag}</span>
            <span style={{marginLeft: 'auto'}}>
                <Chip
                    component="span"
                    size="small"
                    variant="outlined"
                    label={points + " points"}
                />
            </span>
            
        </div>} 
    />  
    </ListItem>
}
export default GameEndPlayer