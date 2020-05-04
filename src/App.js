import React, { useState, useEffect } from 'react'
import { Container, IconButton, makeStyles } from '@material-ui/core/'
import { ArrowBack } from '@material-ui/icons/'
import MyDrawer from './components/UI/MyDrawer' 
import NavBar from './components/UI/NavBar'
import MainMenu from './views/MainMenu'
import Game from './views/Game'
import '../src/style.css'
import io from 'socket.io-client'

const socket = io(process.env.REACT_APP_SOCKET_URL || 'localhost:3001')

function App() {
    const [game, setGame] = useState({})
    const [showBackButton, setShowBackButton] = useState(false)
    const [openStatus, setOpenStatus] = useState(false)
    const [showGame, toggleGame] = useState(false)
    const [pageTitle, setPageTitle] = useState('Welcome to WikiQuiz')
    const [view, setView] = useState('play')
    const [gamertag, setGamertag] = useState("")

    useEffect(() => {
        socket.on("send game", game => {
            setGame(game)
            toggleGame(!showGame)
        })
        socket.on("send gamertag", data => {
            setGamertag(data)
        })
    }, [])

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            height: '100%'
        },
        backPageButton: {
            marginRight: theme.spacing(2)
        },
        toolbar: theme.mixins.toolbar,
        button: {
            margin: theme.spacing(1)
        }
    }))

    const classes = useStyles()

    function getGame() {
        return game
    }
  
    function getPage() {
        switch(showGame) {
            case true: return <Game getGame={getGame} socket={socket} gamertag={gamertag}/>
            default: return <MainMenu
                setShowBackButton={setShowBackButton}
                socket={socket}
                toggleGame={toggleGame}
                view={view}
                setView={setView}
                gamertag={gamertag}
                setGamertag={setGamertag}
            />
        }
    }

    return <div className={classes.root}>
        { showGame ? '' : 
        <NavBar title={pageTitle} toggle={() => setOpenStatus(!openStatus)} previousButton={
            showBackButton ? <IconButton
                color="inherit"
                aria-label="Go Back To Previous Page"
                edge="start"
                onClick={() => setView('play')} 
                className={classes.backPageButton}>
                <ArrowBack />
            </IconButton> : ''
        } /> }
        { showGame ? '' : <MyDrawer view={view} setOpenStatus={setOpenStatus} setView={setView} openStatus={openStatus} /> }
        <Container maxWidth={false} style={{padding: 0}} disableGutters>
            { showGame ? '' : <div className={classes.toolbar}></div> }
            { getPage() }
        </Container>
    </div>
}

export default App