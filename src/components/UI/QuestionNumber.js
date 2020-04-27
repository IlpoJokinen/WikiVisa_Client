import React from 'react'

const QuestionNumber = ({number}) => {
    const textStyle = {
        textAlign: 'center',
        color: 'white',
        marginTop: -16,
        paddingTop: 50,
        fontFamily: 'IBM Plex Sans',
        fontWeight: 600,
        fontSize: '20px'
    }

    return (
        <div>
            <h3 style={textStyle}>{`${number}/10`}</h3>
        </div>
    )
}

export default QuestionNumber
