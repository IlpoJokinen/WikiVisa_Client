import React from 'react'
import { Col } from 'react-bootstrap'
import '../../style.css'

const Choice = ({ choice, value }) => {
    const id = `${value}`
  
    return <Col className="radioButton">
        <input id={id} type="radio" name="choices" value={value}/>
        <label htmlFor={id}>{ choice }</label>
    </Col>
}

export default Choice