import React from 'react'

const QuestionNumber = ({questionIndex, questionCount}) => {
    const textStyle = {
        textAlign: 'center',
        color: 'white',
        marginTop: -16,
        paddingTop: 50,
        margin: "0 5px 0 5px",
        fontFamily: 'IBM Plex Sans',
        fontWeight: 600,
        fontSize: '20px'
    }

    return (
        <div>
            <h3 style={textStyle}>{`${questionIndex}/${questionCount}`}</h3>
        </div>
    )
}

export default QuestionNumber
