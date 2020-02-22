import React from 'react'
import { Row } from 'react-bootstrap'
import Choice from './Choice'
import '../../style.css'

const Choices = ({ setAnswer, choices }) => {
    return <Row>
        { 
            choices.map((choice, i) => 
                <Choice setAnswer={setAnswer} choice={choice} key={i} value={i} />
            )
        }
    </Row>
}

export default Choices