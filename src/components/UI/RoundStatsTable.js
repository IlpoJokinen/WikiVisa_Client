import React from 'react'
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../style.css'

const RoundStatsTable = ({ gamertag, players }) => {
    let rows = ""
    if(players){
        rows = players.map((p, i) => {
            const answer = p.answers[p.answers.length -1]
            return <tr key = {i}>
                <td>{i + 1}</td>
                {gamertag === p.gamertag ? <td><b>{p.gamertag}</b></td> : <td>{p.gamertag}</td>}
                <td>{answer}</td>
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