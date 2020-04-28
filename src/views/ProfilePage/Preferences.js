import React, { useState } from 'react'
import { Container, Row, Col, Form, ToggleButton, ToggleButtonGroup, ListGroup} from 'react-bootstrap'
import RangeSlider from './RangeSlider'

const Preferences = () => {
    const [categories, setCategories] = useState([{name: 'geography', chosen: false}, {name: 'landmarks', chosen: false}, {name: 'sports', chosen: false}, {name: 'it', chosen: false}, {name: 'history', chosen: false}, {name: 'humans', chosen: false}, {name: 'math', chosen: false}])
    let listItems = (categories).map((c, i) => {
       return c.chosen ? <p key={i}>{c.name}</p> : null
    })

    function clickHandler(cParameter) {
        let newStateArray = categories.map(c => {
            if(c.name === cParameter.name) {
                return {...c, chosen: true}
            }
            return c
        })
        setCategories(newStateArray)
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId='questionRange'>
                            <Form.Label>Number of questions in a game</Form.Label>
                            <RangeSlider />
                        </Form.Group>
                        <Form.Group controlId='FilterCategories'>
                            <Form.Label>Choose what type of categories you want to see in your games</Form.Label>
                            <Row>
                                <ToggleButtonGroup type='checkbox'>
                                    <ToggleButton value={categories[0].name} onClick={() => clickHandler(categories[0])}>Geography</ToggleButton>
                                    <ToggleButton value={categories[1].name}>Landmarks</ToggleButton>
                                    <ToggleButton value={categories[2].name}>Sports</ToggleButton>
                                    <ToggleButton value={categories[3].name}>IT</ToggleButton>
                                    <ToggleButton value={categories[4].name}>History</ToggleButton>
                                    <ToggleButton value={categories[5].name}>Humans</ToggleButton>
                                    <ToggleButton value={categories[6].name}>Math</ToggleButton>
                                </ToggleButtonGroup>
                            </Row>                 
                        </Form.Group>
                    </Form>
                </Col>
                <Col>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>{listItems}</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    ) 
}
export default Preferences
             
                
            
     
         
              
                 
                         
