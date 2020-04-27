import React, { useState } from 'react'
import '/Users/Aarre/Desktop/ohjelmistoprojekti2/WikiVisa_Client/src/style.css'

const AnswerOption = ({ option, setAnswer }) => {

    const divStyle = {
        textAlign: 'center',
        marginBottom: '20px'
    }

    const id = option
    
    return (
        <div style={divStyle} className="radioButton" >
            <input onClick={() => setAnswer(option)} id={id} value={option} type="radio" name="option"/>
            <label htmlFor={id}>{option}</label>
        </div>
    )
}

export default AnswerOption
