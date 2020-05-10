import React from 'react'
import { AppBar, Toolbar, IconButton, makeStyles } from '@material-ui/core'
import Header from './Header'
import { Menu } from '@material-ui/icons/'

const NavBar = ({ title, toggle, previousButton }) => {
    const useStyles = makeStyles((theme) => ({
        menuButton: {
            marginRight: theme.spacing(2)
        },
        toolbar: theme.mixins.toolbar,
        appBar: {
            backgroundColor: '#6674AD'
        }
    }))
    const classes = useStyles()
    return <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="Open Drawer"
                edge="start"
                onClick={() => toggle()} 
                className={classes.menuButton}>
                <Menu />
            </IconButton>
            { previousButton }
            <Header style={{margin: 0}} size={4} white inline>
                { title }
            </Header>
        </Toolbar>
    </AppBar>
}

export default NavBar