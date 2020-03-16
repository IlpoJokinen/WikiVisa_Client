import React, { useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import WelcomeScreen from './components/WelcomeScreen' 
import StartScreen from './components/StartScreen'
import QuestionScreen from './components/QuestionScreen'
import RoundEndScreen from './components/RoundEndScreen'
import GameEndScreen from './components/GameEndScreen'
import LoginScreen from './components/LoginScreen'
import io from 'socket.io-client'
import './App.css'
import './style.css'

const socket = io('http://localhost:3001')

function App() {
    const [game, setGame] = useState({})
    const [gamertag, setGamertag] = useState("")
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
    }, [])
    useEffect(() => {
        if(typeof answer === 'object') {
            submitAnswer()
        }
    }, [answer])
    
    function getQuestionByQuestionId(question_id) {
        let question = false
        game.questions.forEach(q => {
            if(q.question_id === question_id) {
                question = q
            }
        }) 
        return question
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

    function submitAnswer() {
        socket.emit("submit answer", {
            question_id: game.question.id,
            gamertag: gamertag,
            answer: answer,
            game_id: game.id
        })
    }
    
    function joinGame(gamertag, roomCode) {
        setGamertag(gamertag)
        setJoiningState(true)
        socket.emit("join game", { gamertag, roomCode })
    }

    function createGame(gamertag, roomCode, gameProperties) {
        setGamertag(gamertag)
        setJoiningState(true)
        setCreatingState(true)
        socket.emit('create game', { gamertag, roomCode, gameProperties })
    }

    function setReady() {
        socket.emit("set ready", { game_id: game.id, gamertag, roomCode: game.roomCode })
    }

    function getPage() {
        switch(game.view) {
            case 1: return <StartScreen 
                players={game.players} 
                gamertag={gamertag} 
                timer={game.startGameCounter}
                roomCode={game.roomCode} 
            />
            case 2: return <QuestionScreen 
                players={game.players} 
                gamertag={gamertag} 
                timer={game.questionCounter} 
                question={game.question}
                setAnswer={setAnswer} 
                setReady={setReady}
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
            default: return <WelcomeScreen
                joiningState={joiningState}
                joinGame={joinGame}
                createGame={createGame}
                creatingState={creatingState}
            />
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