import React, { useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import WelcomeScreen from './components/WelcomeScreen' 
import StartScreen from './components/StartScreen'
import QuestionScreen from './components/QuestionScreen'
import RoundEndScreen from './components/RoundEndScreen'
import GameEndScreen from './components/GameEndScreen'
import io from 'socket.io-client'
import './App.css'
import './style.css'

const socket = io('http://localhost:3001')

function App() {
    const [players, setPlayers] = useState([])
    const [game, setGame] = useState({})
    const [gamertag, setGamertag] = useState("")
    const [answer, setAnswer] = useState(null)
    const [correctAnswer, setCorrectAnswer] = useState("")

    useEffect(() => {
        socket.emit("get players")
        socket.on("send players", (data) => {
            setPlayers(data)
        })
        socket.on("send game", (game) => {
            setGame(game)
        })
        socket.on("send timer", (timer) => {
            let timerName = Object.keys(timer)[0];
            setGame(prevState => ({...prevState, [timerName]: timer[timerName]}))
        })
        socket.on("update game view", view => {
            setGame(prevState => ({...prevState, view: view}))
        })
        socket.on("get gamertag", data => {
            setGamertag(data)
        })
        socket.on("get correct answer", data => {
            setCorrectAnswer(data)
        })
    }, [])

    useEffect(() => {
        if(game.hasOwnProperty('view') && game.view.length) {
            socket.emit('get timer', game.view)
        }
    }, [game])

    useEffect(() => {
        if(Number.isInteger(answer)) {
            submitAnswer()
        }
    }, [answer])

    function getQuestionFromQuestions(index) {
        return game.questions[index]
    }

    function submitAnswer() {
        socket.emit("submit answer", {
            question_id: getQuestionFromQuestions(game.currentQuestionIndex).question_id,
            gamertag: gamertag,
            answer: answer,
        })
    }
    
    function joinGame(gamertag) {
        setGamertag(gamertag);
        socket.emit("join game", gamertag)
    }

    function getPage() {
        switch(game.view) {
            case 1: return <StartScreen players={players} gamertag={gamertag} timer={game.startGameCounter} />
            case 2: return <QuestionScreen 
                players={players} 
                gamertag={gamertag} 
                timer={game.questionCounter} 
                questions={game.questions}
                setAnswer={setAnswer} 
            />
            case 3: return <RoundEndScreen players={players} gamertag={gamertag} timer={game.roundEndCounter} correctAnswer={correctAnswer} />
            case 4: return <GameEndScreen players={players} gamertag={gamertag} />
            default: 
                return <WelcomeScreen joinGame={joinGame} />
        }
    }

    return <Container className="wrapper" fluid>
        <Row>
            <Col>
                {
                   getPage()
                }
            </Col>
        </Row>
    </Container>
}

export default App