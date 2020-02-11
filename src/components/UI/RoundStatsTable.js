import React from 'react'
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../style.css'

const RoundStatsTable = ({ players }) => {
    const rows = players.map((p, i) => {
        const answer = p.answers[p.answers.length -1]
        return <tr key = {i}>
            <td>{i + 1}</td>
            <td>{p.gamertag}</td>
            <td>{answer}</td>
        </tr>
    })

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