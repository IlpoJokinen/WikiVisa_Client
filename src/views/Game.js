import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import QuestionScreen from './QuestionPage/Index'
import RoundEndScreen from './RoundEndPage/Index'
import GameEndScreen from './GameEndPage/Index'
import LobbyScreen from './LobbyPage/Index'
import Chat from '../components/UI/Chat/Chat'

const Game = ({getGame, socket, gamertag }) => {
    const [game, setGame] = useState(getGame())
    const [answer, setAnswer] = useState("")
    const [correctAnswer, setCorrectAnswer] = useState({})

    useEffect(() => {
        socket.on("send players", players => {
            setGame(prevState => ({...prevState, players: players}))
        })
        socket.on("send timer", timer => {
            let timerName = Object.keys(timer)[0];
            setGame(prevState => ({...prevState, [timerName]: timer[timerName]}))
        })
        socket.on("update game view", view => {
            setGame(prevState => ({...prevState, view: view}))
        })
        socket.on('reset timers', data => {
            setGame(prevState => ({...prevState, questionCounter: data.questionCounter, roundEndCounter: data.roundEndCounter}))
        })
        socket.on("get correct answer", data => {
            setCorrectAnswer(data)
        })
        socket.on("gamertag taken", data => {
            //setGamertag(data)
            //setJoiningState(false)
            window.alert(`Gamertag '${data} is already taken!'`)
        })
        socket.on("send question", data => {
            setGame(prevState => ({...prevState, question: data.nextQuestion, currentQuestionIndex: data.questionIndex}))
        })
        socket.on("game started", () => {
            setGame(prevState => ({...prevState, started: true}))
        })
    }, [])
    
    function setAnswerAndPlayerReady() {
        socket.emit("set ready", { game_id: game.id, gamertag, answer, question_id: game.question.id }) 
    }

    function setPlayerReadyLobby() {
        socket.emit("set lobby ready", { game_id: game.id, gamertag: gamertag })
    }

    function startGame() {
        socket.emit("start game", { game_id: game.id })
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
                answers[p.gamertag] = {noAnswer: true}
            }
        })
        return answers
    }

    function sendMessage(message) {
        socket.emit("send lobby message", {gamertag: gamertag, message: message, game_id: game.id})
    }
    function getPage() {
        switch(game.view) {
            case 1: return <LobbyScreen
                gameType={game.type}
                players={game.players} 
                gamertag={gamertag} 
                timer={game.startGameCounter}
                roomCode={game.roomCode} 
                startGame={startGame}
                started={game.started}
                isCreator={game.creator}
                setPlayerReadyLobby={setPlayerReadyLobby}
                chat={<Chat socket={socket} gamertag={gamertag} sendMessage={sendMessage}/>}
            />
            case 2: return <QuestionScreen
                questionIndex={game.currentQuestionIndex}
                questionCount={game.numberOfQuestions} 
                setAnswer={setAnswer} 
                timer={game.questionCounter} 
                question={game.question}
                players={game.players}
                setReady={setAnswerAndPlayerReady}
            />
            case 3: return <RoundEndScreen 
                players={game.players}   
                answers={getPlayersAnswers()} 
                gamertag={gamertag} 
                timer={game.roundEndCounter} 
                correctAnswer={correctAnswer} 
            />
            case 4: return <GameEndScreen 
                players={game.players} 
                gamertag={gamertag} 
            />
            default: return <Button onClick={() => window.location.reload()}>Reload</Button>
        }
    }
    return getPage()
}
export default Game