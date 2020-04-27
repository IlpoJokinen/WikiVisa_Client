import React from 'react'

const Question = ({question}) => {
    const textStyle = {
        textAlign: 'center',
        color: 'white',
        marginTop: -30,
        paddingTop: 50,
        fontSize: '22px',
        fontFamily: 'IBM Plex Sans',
        fontWeight: 600
    }

    return (
        <div>
            <h4 style={textStyle}>{question}</h4>
        </div>
    )
}

export default Question