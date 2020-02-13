import React from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const StatsTable = ({players}) => {
    //Sort by points and map to table
    const rows = (players)
        .sort((a, b) => b.points - a.points)
        .map((player, i) =>
        <tr key = {i}>
            <td>{player.gamertag}</td>
            <td>{player.points} {i === 0 ? "winner" : "you suck"}</td>
            
        </tr>
    );
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


const GameEndScreen = ({players}) => {
return (
<div className="main">
<br></br>
<h2>End Stats</h2>

<StatsTable players={players}/>

    <div className="buttons">
        <ButtonGroup className="buttons" size="lg">
            <Button href="/">Return to FrontPage</Button>
            <Button>Play Again</Button>
        </ButtonGroup>
    </div>
</div>
);
}

export default GameEndScreen;