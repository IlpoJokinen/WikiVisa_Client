import React from 'react'
import QuestionNumber from './QuestionNumber'
import Question from './Question'
import Timer from './Timer'

const QuestionInfoBox = ({ question, number, timeRemaining }) => {
    const infoBoxStyle = {
        height: 300,
        backgroundColor: '#879DFA',
        marginBottom: 70,
    }

    return (
        <div style={infoBoxStyle}>
            <QuestionNumber number={number}/>
            <Question question={question}/>
            <Timer timeRemaining={timeRemaining}/>
        </div>
    )
}

export default QuestionInfoBox
