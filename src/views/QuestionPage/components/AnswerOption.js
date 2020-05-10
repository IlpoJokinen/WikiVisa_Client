import React from 'react'
import '../../../style.css'
 
const AnswerOption = ({ option, setAnswer, value, setAnswerGiven }) => {
    const id = option

    function handleClick() {
        setAnswer({value: value, name: option})
        setAnswerGiven(true)
    }

    return <div className="radioButton">
            <input onClick={() => handleClick()} id={id} value={option} type="radio" name="option"/>
            <label htmlFor={id}>{option}</label>
        </div>
    }
 
export default AnswerOption
