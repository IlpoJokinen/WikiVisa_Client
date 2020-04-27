import React from 'react'
import { Drawer, Divider, List, ListItem, ListItemText, IconButton, makeStyles } from '@material-ui/core/'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

const MyDrawer = ({view, setOpenStatus, setView, openStatus}) => {
    const drawerWidth = 240
    const useStyles = makeStyles((theme) => ({
        drawerPaper: {
            backgroundColor: '#6674AD',
            width: drawerWidth,
        },
        listItemText: {
            fontFamily: 'IBM Plex Sans',
            color: 'white',
            textAlign : 'center'
        },
        listItem: {
            marginBottom: 10
        },
        listItemActive: {
            marginBottom: 10,
            backgroundColor: 'rgba(255,255,255,0.3)'
        },
        backIcon: {
            color: 'white'
        }
    }))
    const classes = useStyles()

    const changePage = url => {
        setOpenStatus(!openStatus)
        setView(url)
    }

    return <Drawer
        open={openStatus}
        className={classes.drawer}
        variant={'persistent'}
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
                [{name: 'Play Game', url: 'play'}, 
                {name: 'Statistics', url: 'statistics'}, 
                {name: 'Profile', url: 'profile'}, 
                {name: 'Sign In & Sign Up', url: 'login'}
            ].map((obj, index) => 
                    <ListItem button onClick={() => changePage(obj.url)} key={index} className={view == obj.url ? classes.listItemActive : classes.listItem}>
                        <ListItemText  className={classes.listItemText} primary={obj.name} />
                    </ListItem>
                )
            }
        </List>
    </Drawer>
}
export default MyDrawer