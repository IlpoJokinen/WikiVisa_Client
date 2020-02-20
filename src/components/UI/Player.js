import React from 'react'
import '../../style.css'

const Player = ({ gamertag, thisPlayersTag }) => {
    if(thisPlayersTag){
        return <div className="gamerTag"><b>{ gamertag }</b></div>
    }
    return <div className="gamerTag">{ gamertag }</div>
}

export default Player