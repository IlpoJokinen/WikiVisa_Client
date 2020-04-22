import React from 'react'
import { Drawer, Divider, List, ListItem, ListItemText, IconButton, makeStyles } from '@material-ui/core/'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

const MyDrawer = ({setOpenStatus, openStatus}) => {
    const drawerWidth = 240
    const useStyles = makeStyles((theme) => ({
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        drawerPaper: {
            backgroundColor: '#6674AD',
            width: drawerWidth,
        },
        listItemText: {
            fontFamily: 'IBM Plex Sans, Verdana !important',
            color: 'white',
            textAlign : 'center'
        },
        listItem: {
            marginBottom: 10
        },
        backIcon: {
            color: 'white'
        }
    }))

    const classes = useStyles()

    return <Drawer
        open={openStatus}
        className={classes.drawer}
        variant="persistent"
        anchor={'left'}
        classes={{
            paper: classes.drawerPaper,
        }}
        ModalProps={{
            keepMounted: true
        }}>
        <IconButton onClick={() => setOpenStatus(false)}>
            <ChevronLeftIcon className={classes.backIcon} />
        </IconButton>
        <Divider />
        <List>
            {
                ['Play Game', 'Statistics', 'Profile', 'Sign In & Sign Up'].map((text, index) => 
                    <ListItem button key={text} className={classes.listItem}>
                        <ListItemText  className={classes.listItemText}  primary={text} />
                    </ListItem>
                )
            }
        </List>
    </Drawer>
}
export default MyDrawer