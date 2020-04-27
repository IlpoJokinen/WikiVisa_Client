import React from 'react'

const AnswerInfoBox = ({ correctAnswer }) => {
    const infoBoxStyle = {
        height: 300,
        backgroundColor: '#879DFA',
        marginBottom: 70,
        marginTop: -16
    }

    const style = {
        textAlign: 'center',
        paddingTop: 70,
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
            <h3 style={style}>The correct answer is</h3>
            <h2 style={answerStyle}>{correctAnswer}</h2>
        </div>
    )
}

export default AnswerInfoBox
