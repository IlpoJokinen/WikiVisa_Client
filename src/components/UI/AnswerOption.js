import React from 'react'
import '../../../src/style.css'
 
const AnswerOption = ({ option, setAnswer }) => {
 
    const id = option

    return <div className="radioButton">
            <input onClick={() => setAnswer(option)} id={id} value={option} type="radio" name="option"/>
            <label htmlFor={id}>{option}</label>
        </div>
    }
 
export default AnswerOption