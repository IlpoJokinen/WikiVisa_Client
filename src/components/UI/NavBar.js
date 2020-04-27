import React from 'react'
import { AppBar, Toolbar, IconButton, makeStyles } from '@material-ui/core'
import Header from './Header'
import MenuIcon from '@material-ui/icons/Menu'

const NavBar = ({ title, toggle }) => {
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
                aria-label="open drawer"
                edge="start"
                onClick={() => toggle()} 
                className={classes.menuButton}>
                <MenuIcon />
            </IconButton>
            <Header style={{margin: 0}} size={4} white inline>
                { title }
            </Header>
        </Toolbar>
    </AppBar>
}

export default NavBar