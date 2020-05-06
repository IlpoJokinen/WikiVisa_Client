import React from 'react'
import Timer from '../../components/UI/Timer'

const AnswerInfoBox = ({ correctAnswer, timer }) => {
    const infoBoxStyle = {
        height: "auto",
        backgroundColor: '#879DFA',
        marginBottom: 20,
        marginTop: -16,
        paddingBottom: 15
    }

    const style = {
        textAlign: 'center',
        color: 'rgb(255, 255, 255)',
        fontFamily: 'IBM Plex Sans'
    }

    const answerStyle = {
        textAlign: 'center',
        color: 'rgb(255, 255, 255)',
        fontWeight: 600,
        fontFamily: 'IBM Plex Sans'
    }

    const headingStyle = {
        textAlign: 'center',
        fontFamily: 'IBM Plex Sans',
        color: 'rgb(255, 255, 255)',
        fontWeight: 600,
        paddingTop: 30
    }


    return (
        <div style={infoBoxStyle}>
            <h5 style={headingStyle}>Round end results</h5>
            <Timer color={"#fff"} timeRemaining={timer}/>
            <h3 style={style}>{correctAnswer.answerTitle}</h3>
            <h2 style={answerStyle}>{correctAnswer.name}</h2>
        </div>
    )
}

export default AnswerInfoBox
