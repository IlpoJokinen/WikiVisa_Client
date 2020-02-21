import React from 'react'
import { Table } from 'react-bootstrap'
import { Check } from 'react-bootstrap-icons'
import 'bootstrap/dist/css/bootstrap.min.css'

const ReadyCheckTable = ({players, gamertag, ready}) => {
    let rows = ''
    if (players) {
        rows = players.map((p, i) => {
            return <tr key={i}>
                <td>{i + 1}</td>
                <td>{gamertag === p.gamertag ? <b>{p.gamertag}</b> : p.gamertag}</td>
                <td>{ready && gamertag === p.gamertag ? <Check color="green" size={40} /> : ""}</td>
            </tr>
        })
    } 
    return <Table striped bordered hover size="sm">
        <thead>
            <tr>
                <th>#</th>
                <th>Gamertag</th>
                <th>Ready</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </Table>
}

export default ReadyCheckTable