import React, { useState, useEffect } from 'react';
import { Table, Badge } from 'react-bootstrap'

const RoundStats = ({ players }) => {
    const [timer, setTimer] = useState(20)

    useEffect(() => {
        setTimeout(() => {
            if(timer > 0){
                setTimer(timer - 1)
            }
        }, 1000)
    }, [timer])


    //hardcoded answer
    const correctAnswer = "A"

    const checkAnswer = (answerOfUser) => {
        return answerOfUser === correctAnswer ? "YES" : "NO"
    }

    const rows = players.map((p, i) => {
        const answer = p.answers[p.answers.length -1 ]
        return <tr key = {i}>
            <td>{i + 1}</td>
            <td>{p.gamertag}</td>
            <td>{answer}</td>
            <td>{checkAnswer(answer)}</td>
        </tr>
    })


    return (
        <div style={{textAlign:"center"}}>
            <h1>Round Statistics</h1>
            <div id="answersByUsers">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Answered</th>
                        <th>Correct</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                        
                    </tbody>
                </Table>
            </div>
            <div id="correctAnswer">
                <h4>Correct answer <Badge variant="success">A</Badge></h4>
            </div>
            <div id="nextRoundInfo">
                <h4>Next round starts in <Badge variant="success">{timer}</Badge> seconds</h4>
            </div>
        </div>
    );
};

export default RoundStats;