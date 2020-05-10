import React from 'react'
import firstPlaceTrophy from '../../../assets/trophies/firstPlace.svg'
import secondPlaceTrophy from '../../../assets/trophies/secondPlace.svg'
import thirdPlaceTrophy from '../../../assets/trophies/thirdPlace.svg'
import Header from "../../../components/UI/Header"

const StandingsTrophy = ({ standing, player }) => {
    const imageStyle = {
        width: 70,
        height: 70,
        display: "block",
        margin: "0 auto 10px auto"
    }
    const getImage = () => {
        let image;
        switch(standing) {
            case 1:  image = firstPlaceTrophy; break;
            case 2:  image = secondPlaceTrophy; break;
            case 3:  image = thirdPlaceTrophy; break;
            default: image = firstPlaceTrophy; break;
        }
        return <img style={imageStyle} alt="trophyImage" src={image} />
    }
    return <div style={{
        textAlign: "center"
    }}>
        {getImage()}
        <Header style={{display:"block"}} white size={5}>{player.gamertag}</Header>
        <Header style={{display:"block"}} white size={3}><strong>{player.points}</strong></Header>
    </div>
}

export default StandingsTrophy