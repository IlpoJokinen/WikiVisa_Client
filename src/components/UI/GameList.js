import React, { useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'
import GameListItem from './GameListItem'

const GameList = ({getPublicGames, publicGames}) => {
    useEffect(() => {
        getPublicGames()
    }, [])

    return <ListGroup>
        { 
            publicGames.map((game, i) => 
                <GameListItem key={i} game={game} />
            )
        }
    </ListGroup>
}

export default GameList