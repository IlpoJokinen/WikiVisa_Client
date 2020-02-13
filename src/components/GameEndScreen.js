import React from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './Enddata.json'

//Sort by points and map to table
const rows = (data)
    .sort((a, b) => b.Points - a.Points)
    .map((data, i) =>
    <tr key = {i}>
        <td>{data.gamertag}</td>
        <td>{data.Points}</td>
    </tr>
);

const StatsTable = () => {
//console.log(data);
    return (
        <Table responsive variant="dark">
                <thead>
                    <tr>
                    <th>User</th>
                    <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
        </Table>

    )
}


const GameEndScreen = () => {
return (
<div className="main">
<br></br>
<h2>End Stats</h2>

<StatsTable/>

    <div className="buttons">
        <ButtonGroup className="buttons" size="lg">
            <Button>Return to FrontPage</Button>
            <Button>Play Again</Button>
        </ButtonGroup>
    </div>
</div>
);
}

export default GameEndScreen;