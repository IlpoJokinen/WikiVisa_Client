import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/'
import PropTypes from 'prop-types'
import MyDrawer from './components/UI/MyDrawer' 
import NavBar from './components/UI/NavBar'
import MainMenu from './views/MainMenu'
import Game from './views/Game'
import '../src/style.css'
import io from 'socket.io-client'

const socket = io(process.env.REACT_APP_SOCKET_URL || 'localhost:3001')

function App() {
    const [game, setGame] = useState({})
    const [openStatus, setOpenStatus] = useState(false)
    const [showGame, toggleGame] = useState(false)
    const [pageTitle, setPageTitle] = useState('Welcome to WikiQuiz')
    const [view, setView] = useState('play')

    useEffect(() => {
        socket.on("send game", game => {
            setGame(game)
            toggleGame(!showGame)
        })
    }, [])

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            height: '100%'
        },
        toolbar: theme.mixins.toolbar
    }))

    const classes = useStyles()
  
    function getPage() {
        switch(showGame) {
            case true: return <Game game={game} setGame={setGame} socket={socket}/>
            default: return <MainMenu
                socket={socket}
                toggleGame={toggleGame}
                view={view}
                setView={setView}
            />
        }
    }

    const Page = props => {
        return <div id="page">
            <div className={classes.toolbar}></div>
            { props.children }
        </div>
    }

    Page.propTypes = {
        children: PropTypes.node
    }

    return <div className={classes.root}>
        <NavBar title={pageTitle} toggle={() => setOpenStatus(!openStatus)} />
        <MyDrawer view={view} setOpenStatus={setOpenStatus} setView={setView} openStatus={openStatus} />
        <Page>{ getPage() }</Page>
    </div>
}

export default App