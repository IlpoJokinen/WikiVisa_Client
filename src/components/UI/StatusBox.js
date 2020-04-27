import React from 'react'

const StatusBox = ({ activePlayers }) => {
    return <div className="statusBox">
        <h6 style={{margin: 0}}>Active players: {activePlayers}</h6>
    </div>
}

export default StatusBox