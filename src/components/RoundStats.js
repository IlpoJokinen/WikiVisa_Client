import React, { useState, useEffect } from 'react';
import { Table, Badge } from 'react-bootstrap'

const RoundStats = () => {
    const [timer, setTimer] = useState(20)

    useEffect(() => {
        setTimeout(() => {
            if(timer > 0){
                setTimer(timer - 1)
            }
        }, 1000)
    }, [timer])


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
                        <tr>
                        <td>1</td>
                        <td>User1</td>
                        <td>A</td>
                        <td>Yes</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>User2</td>
                        <td>B</td>
                        <td>No</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>User3</td>
                        <td>A</td>
                        <td>Yes</td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td>User4</td>
                        <td>A</td>
                        <td>Yes</td>
                        </tr>
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