import React from 'react'
import QuestionNumber from './QuestionNumber'
import Question from './Question'
import Timer from './Timer'

const QuestionInfoBox = ({ question, timeRemaining, questionCount, questionIndex }) => {
    const infoBoxStyle = {
        height: "auto",
        backgroundColor: '#879DFA',
        paddingBottom: 15

    }

    return (
        <div style={infoBoxStyle}>
            <Timer color={"#fff"} timeRemaining={timeRemaining}/>
            <QuestionNumber questionCount={questionCount} questionIndex={questionIndex}/>
            <Question question={question}/>
        </div>
    )
}

export default QuestionInfoBox
