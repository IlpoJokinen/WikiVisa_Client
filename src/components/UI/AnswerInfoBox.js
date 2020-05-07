import React from 'react'
import Timer from '../../components/UI/Timer'
import { Box } from '@material-ui/core/'
import Header from '../../components/UI/Header'

const AnswerInfoBox = ({ answers, correctAnswer, timer, gamertag }) => {

    return <Box style={{textAlign: "center"}}>
                <Box m={2}><Timer color={"#fff"} timeRemaining={timer}/></Box>
                <Box m={2}>{correctAnswer.value === answers[gamertag].value 
                    ? <Header size={3}white >Your answer was correct</Header>
                    : answers[gamertag].noAnswer ? <Header size={3}white>You didn't give any answer</Header> : <Header size={3}white>Your answer <strong>{answers[gamertag].name}</strong> was incorrect</Header>
                    }</Box>
                <Box m={2}><Header size={4} white>{correctAnswer.answerTitle} <strong>{correctAnswer.name}</strong></Header></Box>
            </Box>
        
    
}

export default AnswerInfoBox
