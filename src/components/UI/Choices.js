import React from 'react'
import { Row } from 'react-bootstrap'
import Choice from './Choice'
import '../../style.css'

const Choices = ({setAnswer, choices, disabled }) => {
    return <Row className={disabled ? 'rowDisabled' : ''}>
        { 
            choices.map((choice, i) => 
                <Choice disabled={disabled} setAnswer={setAnswer} choice={choice} key={i} value={i} />
            )
        }
    </Row>
}

export default Choices