import React from 'react'
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../style.css'

const RoundStatsTable = ({ gamertag, answers, correctAnswer }) => {
    let rows = ""
    if(answers){
        rows = Object.keys(answers).map((p, i) => {
            return <tr key={i} className={answers[p].value === correctAnswer.value ? 'correct' : 'wrong'}>
                <td>{i + 1}</td>
                <td>{gamertag === p ? <b>{p}</b> : p}</td>
                <td>{answers[p].name}</td>
            </tr>
        })
    }

    return <Table striped bordered hover size="sm">
        <thead>
            <tr>
                <th>#</th>
                <th>Gamertag</th>
                <th>Answered</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </Table>
}

export default RoundStatsTable