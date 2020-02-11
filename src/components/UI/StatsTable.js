import React from 'react'
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../style.css'

const StatsTable = ({ players }) => {
    //Sort by points and map to table
    const rows = (players)
        .sort((a, b) => b.points - a.points)
        .map((player, i) => <tr key={i}>
            <td>{ i + 1}</td>
            <td>{ player.gamertag }</td>
            <td>{ player.points } {i === 0 ? "winner" : "you suck"}</td>
        </tr>
    )

    return <Table striped bordered hover size="sm">
        <thead>
            <tr>
                <th>#</th>
                <th>User</th>
                <th>Points</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </Table>
}

export default StatsTable