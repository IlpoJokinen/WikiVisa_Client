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
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
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
        <div className={classes.drawerHeader}>
            <IconButton onClick={() => setOpenStatus(false)}>
                <ChevronLeftIcon className={classes.backIcon} />
            </IconButton>
        </div>
        <Divider />
        <List>
            {
                [{name: 'Play Game', url: 'play', state: true}, 
                {name: 'Statistics', url: 'statistics', state: false}, 
                {name: 'Profile', url: 'profile', state: false}, 
                {name: 'Sign In & Sign Up', url: 'login', state: false}
            ].map((obj, index) => obj.state 
                ? <ListItem button onClick={() => changePage(obj.url)} key={index} className={view === obj.url ? classes.listItemActive : classes.listItem}>
                    <ListItemText  className={classes.listItemText} primary={obj.name} /> 
                </ListItem>
                : ''
                )
            }
        </List>
    </Drawer>
}
export default MyDrawer