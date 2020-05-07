import React from 'react'
import QuestionNumber from './QuestionNumber'
import Question from './Question'
import Timer from './Timer'

const QuestionInfoBox = ({ question, number, timeRemaining }) => {
    const infoBoxStyle = {
        height: "auto",
        backgroundColor: '#879DFA',
        paddingBottom: 15

    }

    return (
        <div style={infoBoxStyle}>
            <QuestionNumber number={number}/>
            <Question question={question}/>
            <Timer color={"#fff"} timeRemaining={timeRemaining}/>
        </div>
    )
}

export default QuestionInfoBox
