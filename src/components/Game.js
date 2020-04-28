import React, { useEffect, useState } from 'react'
import QuestionScreen from './QuestionScreen'
import RoundEndScreen from './RoundEndScreen'
import GameEndScreen from './GameEndScreen'
import Lobby from './views/LobbyPage/Lobby'

const Game = ({socket, game, setGame}) => {
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
        socket.on("send gamertag", data => {
            //setGamertag(data)
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
        socket.on("send question", question => {
            setGame(prevState => ({...prevState, question: question}))
        })
        socket.on("game started", () => {
            setGame(prevState => ({...prevState, started: true}))
        })
        socket.on('test3', (data) => {
            console.log('data:', data)
        })
        socket.on("send messages", messages => {
            setGame(prevState => ({...prevState, messages: messages}))
        })
    }, [])

    function setAnswerAndPlayerReady() {
        socket.emit("set ready", { game_id: game.id, /*gamertag,*/answer, question_id: game.question.id }) 
    }

    function setPlayerReadyLobby() {
        socket.emit("set lobby ready", { game_id: game.id, /*gamertag: gamertag*/ })
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
                answers[p.gamertag] = {name: "No answer for this round"}
            }
        })
        return answers
    }

    function sendMessage(message) {
        socket.emit("send lobby message", {/*gamertag: gamertag,*/ message: message, game_id: game.id})
    }

    function getPage() {
        switch(game.view) {
            case 1: return <Lobby
                game={game}
                players={game.players} 
               // gamertag={gamertag} 
                timer={game.startGameCounter}
                roomCode={game.roomCode} 
                startGame={startGame}
                started={game.started}
                isCreator={game.creator}
                setPlayerReadyLobby={setPlayerReadyLobby}
                messages={game.messages}
                sendMessage={sendMessage}
            />
            case 2: return <QuestionScreen 
                players={game.players} 
                //gamertag={gamertag} 
                timer={game.questionCounter} 
                question={game.question}
                setAnswer={setAnswer} 
                setReady={setAnswerAndPlayerReady}
            />
            case 3: return <RoundEndScreen 
                answers={getPlayersAnswers()} 
                //gamertag={gamertag} 
                timer={game.roundEndCounter} 
                correctAnswer={correctAnswer} 
            />
            case 4: return <GameEndScreen 
                players={game.players} 
               // gamertag={gamertag} 
            />
        }
    }
    return getPage()
}
export default Game