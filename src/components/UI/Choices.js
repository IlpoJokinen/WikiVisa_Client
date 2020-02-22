import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import Choice from './Choice'
import '../../style.css'

const Choices = ({ choices }) => {
    const [answer, setAnswer] = useState('')

    return <Row>
        { 
            choices.map((choice, i) => 
                <Choice choice={choice} key={i} value={i}/>
            )
        }
    </Row>
}

export default Choices