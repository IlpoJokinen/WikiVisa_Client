import React, { useState, useEffect } from 'react'
import { Container, Toolbar, Drawer, AppBar, makeStyles } from '@material-ui/core/'
import { Menu } from '@material-ui/icons/'
import StartScreen from './components/StartScreen'
import QuestionScreen from './components/QuestionScreen'
import RoundEndScreen from './components/RoundEndScreen'
import GameEndScreen from './components/GameEndScreen'
import LandingPage from './components/LandingPage'
import io from 'socket.io-client'

const socket = io(process.env.REACT_APP_SOCKET_URL || 'localhost:3001')

function App() {
    const [game, setGame] = useState({})
    const [publicGames, setPublicGames] = useState([])
    const [gamertag, setGamertag] = useState("")
    const [roomCode, setRoomCode] = useState("")
    const [answer, setAnswer] = useState("")
    const [correctAnswer, setCorrectAnswer] = useState({})
    const [joiningState, setJoiningState] = useState(false)
    const [creatingState, setCreatingState] = useState(false)

    useEffect(() => {
        socket.on("send players", players => {
            setGame(prevState => ({...prevState, players: players}))
        })
        socket.on("send game", game => {
            setGame(game)
        })
        socket.on("send timer", timer => {
            let timerName = Object.keys(timer)[0];
            setGame(prevState => ({...prevState, [timerName]: timer[timerName]}))
        })
        socket.on("update game view", view => {
            setGame(prevState => ({...prevState, view: view}))
        })
        socket.on("send gamertag", data => {
            setGamertag(data)
        })
        socket.on('reset timers', data => {
            setGame(prevState => ({...prevState, questionCounter: data.questionCounter, roundEndCounter: data.roundEndCounter}))
        })
        socket.on("get correct answer", data => {
            setCorrectAnswer(data)
        })
        socket.on("gamertag taken", data => {
            setGamertag(data)
            setJoiningState(false)
            window.alert(`Gamertag '${data} is already taken!'`)
        })
        socket.on("error while joining", error => {
            setJoiningState(false)
            window.alert(error)
        })
        socket.on("send question", question => {
            setGame(prevState => ({...prevState, question: question}))
        })
        socket.on("game started", () => {
            setGame(prevState => ({...prevState, started: true}))
        })
        socket.on("send public games", games => {
            setPublicGames(games)
        })
    }, [])

    function getPublicGames() {
        socket.emit('get public games')
    }

    function getPlayersAnswers() {
        let answers = {}
        game.players.forEach(p => {
            let answeredThisRound = false
            p.answers.forEach(a => {
                if(a.question_id === game.question.id) {
                    answers[p.gamertag] = a.answer
                    answeredThisRound = true
                }
            })
            if(!answeredThisRound){
                answers[p.gamertag] = {name: "No answer for this round"}
            }
        })
        return answers
    }

    function joinGame(roomcodeGiven = undefined) {
        setJoiningState(true)
        if(roomcodeGiven === undefined) {
            socket.emit("join game", { gamertag, roomCode })
        } else {
            socket.emit("join game", { gamertag, roomCode: roomcodeGiven })
        }
    }

    function createGame(gameProperties) {
        setCreatingState(true)
        socket.emit('create game', { gamertag, roomCode, gameProperties })
    }

    function setAnswerAndPlayerReady() {
        socket.emit("set ready", { game_id: game.id, gamertag, answer, question_id: game.question.id }) 
    }

    function startGame() {
        socket.emit("start game", { game_id: game.id })
    }

    function getPage() {
        switch(game.view) {
            case 1: return <StartScreen 
                players={game.players} 
                gamertag={gamertag} 
                timer={game.startGameCounter}
                roomCode={game.roomCode} 
                startGame={startGame}
                started={game.started}
                isCreator={game.creator}
            />
            case 2: return <QuestionScreen 
                players={game.players} 
                gamertag={gamertag} 
                timer={game.questionCounter} 
                question={game.question}
                setAnswer={setAnswer} 
                setReady={setAnswerAndPlayerReady}
            />
            case 3: return <RoundEndScreen 
                answers={getPlayersAnswers()} 
                gamertag={gamertag} 
                timer={game.roundEndCounter} 
                correctAnswer={correctAnswer} 
            />
            case 4: return <GameEndScreen 
                players={game.players} 
                gamertag={gamertag} 
            />
            default: return <LandingPage
                setRoomCode={setRoomCode}
                setGamertag={setGamertag}
                gamertag={gamertag}
                roomCode={roomCode}
                joiningState={joiningState}
                joinGame={joinGame}
                createGame={createGame}
                creatingState={creatingState}
                getPublicGames={getPublicGames}
                publicGames={publicGames}
            />/*<WelcomeScreen
                setRoomCode={setRoomCode}
                setGamertag={setGamertag}
                gamertag={gamertag}
                roomCode={roomCode}
                joiningState={joiningState}
                joinGame={joinGame}
                createGame={createGame}
                creatingState={creatingState}
                getPublicGames={getPublicGames}
                publicGames={publicGames}
            />*/
        }
    }

    const drawerWidth = 240;

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }));
 
    return <Container>
        <AppBar position="fixed">
            <Toolbar>
                <MenuIcon />
                Test
            </Toolbar>

        </AppBar>

        <Drawer>

        </Drawer>
    </Container>
}

export default App
