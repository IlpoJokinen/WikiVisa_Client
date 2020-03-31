import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import '../../style.css'

const Choice = ({ setAnswer, choice, value }) => {
    const id = `choice-${value}`

    return <Col className="radioButton">
        <input 
            onChange={() => setAnswer({value: value, name: choice})} 
            id={id} 
            type="radio" 
            name="choices" 
            value={value} 
        />
        <label htmlFor={id}>{ choice }</label>
    </Col>
}

export default Choice