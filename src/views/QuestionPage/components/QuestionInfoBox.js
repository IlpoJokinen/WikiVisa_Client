import React from 'react'
import Timer from '../../../components/UI/Timer'
import Header from '../../../components/UI/Header'
import { Box } from '@material-ui/core/'

const QuestionInfoBox = ({ question, questionCount, timeRemaining, questionIndex }) => {
   
    return (
        <Box style={{textAlign: "center"}}>
            <Box m={2}><Timer color={"#fff"} timeRemaining={timeRemaining}/></Box>
            <Box m={2}><Header white size={6}>{questionIndex}/{questionCount}</Header></Box>
            <Box m={2}><Header white size={3}>{question}</Header></Box>
        </Box>
    )
}

export default QuestionInfoBox
